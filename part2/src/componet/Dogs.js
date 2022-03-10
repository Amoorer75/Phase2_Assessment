import { useState, useEffect } from 'react'
import { ConstantsDogs } from '../services/constans'


export default function Dogs() {
    const [dogs, setDog] = useState([])

    const fetchData = async (num) => {
        try {
            const response = await ConstantsDogs(num);
            setDog(response)
            console.log(response)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        fetchData(pageNum(17))

    }, [])

    const pageNum = (num) => {
        
        const newNum =Math.floor(Math.random() * num)
        return newNum
    }
  

    const listDogs = dogs.map((dog) => {

        return (
            <div key={dog.id}>
                <img src={dog.image.url} />
            </div>
        )

    })

    return (
        <div>

            <h2>Here Are your Dogs</h2>
            <button > Show The Dogs</button>
            <div className="animalRows">
                {listDogs}
            </div>

        </div>


    )

}