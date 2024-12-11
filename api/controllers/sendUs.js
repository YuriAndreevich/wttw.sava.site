import SendUs from '../models/SendUs.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

export const createSendUs = async (req, res) => {
    try {
        const { title, email, name, text } = req.body

        const newSendUs = new SendUs({
            title,
            text,
            email,
            name,
        })
   
        await newSendUs.save()
        res.json(newSendUs)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const getAll = async (req, res) => {
    try {
        const sendUs = await SendUs.find().sort('-createdAt')

        if (!sendUs || sendUs.length === 0) {
            return res.json({ message: 'Сообщений нет' })
        }

        res.json({ sendUs })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}


export const getById = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 },
        })
        res.json(post)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const getMyPosts = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        const list = await Promise.all(
            user.posts.map((post) => {
                return Post.findById(post._id)
            }),
        )

        res.json(list)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const removeSendUs = async (req, res) => {
    try {
        const sendUs = await SendUs.findByIdAndDelete(req.params.id)
        if (!sendUs) return res.json({ message: 'Такого сообщения не существует' })

        await SendUs.findByIdAndUpdate( req.params.id, {
            $pull: { posts: req.params.id },
        })
        res.json({ message: 'Сообщение был удалено.' })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { title, text, id } = req.body
        const post = await Post.findById(id)

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))
            post.imgUrl = fileName || ''
        }

        post.title = title
        post.text = text

        await post.save()

        res.json(post)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const getPostComments = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const list = await Promise.all(
            post.comments.map((comment) => {
                return Comment.findById(comment)
            }),
        )
        res.json(list)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}
