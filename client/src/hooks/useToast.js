export const useToast = () => {
    const [toast, setToast] = useState(null);
  
    const showToast = (message) => {
      setToast(message);
    };
  
    return { toast, showToast };
  };
  