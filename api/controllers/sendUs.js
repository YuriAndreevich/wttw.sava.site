import SendUs from '../models/SendUs.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

export const createSendUs = async (req, res) => {
    try {
        const { title, text } = req.body

        const newSendUs = new SendUs({
            title,
            text,
        })
   
        await newSendUs.save()
        res.json(newSendUs)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const getAll = async (req, res) => {
    try {k
        // Получаем все посты SendUs и сортируем по дате создания
        const sendUs = await SendUs.find().sort('-createdAt')

        if (!sendUs || sendUs.length === 0) {
            return res.json({ message: 'Постов нет' })
        }

        // Возвращаем список постов
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

export const removePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) return res.json({ message: 'Такого поста не существует' })

        await User.findByIdAndUpdate(req.userId, {
            $pull: { posts: req.params.id },
        })

        res.json({ message: 'Пост был удален.' })
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
