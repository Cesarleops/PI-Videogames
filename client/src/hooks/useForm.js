import { useState} from "react"
import { useDispatch } from 'react-redux'
import { createGame } from "../store/thunks"



export const useForm = (initialForm,formValidations) => {
   const dispatch = useDispatch()

   const [form,setForm] = useState(initialForm)
   const [errors,setErrors]= useState([])

   const handleInput = ({target}) => {
    setForm({
        ...form,
        [target.name]: target.value
    })

}

const handleGenres = ({target}) => {
    target.checked ? 
    setForm({
        ...form,
        genreIds: [...form.genreIds, target.value]
    }) :
     setForm({
            ...form, genreIds: form.genreIds.filter(g => target.value !== g)
        })

    }

    const handlePlatforms = ({target}) => {
        target.checked ? 
        setForm({
            ...form,
            platforms: [...form.platforms, target.value]
        }) :
         setForm({
            ...form,
              platforms: form.platforms.filter(p => target.value !== p)
            })

        }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createGame(form))
        setForm({
            name: '',
            description: '',
            rating: '',
            released: '',
            platforms: [],
            genreIds: []
        })
        console.log('despachado')
    }
   

    const handleBlur = (e) => {
        handleInput(e)
        setErrors(formValidations(form))
    }
    
return {
    form,
    errors,
    handleGenres,
    handleInput,
    handlePlatforms,
    handleSubmit,
    handleBlur

}
    
}