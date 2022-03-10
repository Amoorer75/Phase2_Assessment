import { useState, useEffect } from 'react'
import { ConstantsCats } from '../services/constans'


export default function Cats() {
    const [cats, setCats] = useState([])

    const fetchData = async (num) => {
        try {
            const response = await ConstantsCats(num);
            setCats(response)
            

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        fetchData(pageNum(10))

    }, [])

    const pageNum = (num) => {
        
        const newNum =Math.floor(Math.random() * num)
        return newNum
    }
  

    const listCats = cats.map((cat) => {

        return (
            <div key={cat.id}>
                <img src={cat.image.url} />
            </div>
        )

    })

    return (
        <div>

            <h2>Here Are your Cats</h2>
            <button > Show The Cats</button>
            <br/>
            <div className="animalRows">
                {listCats}
            </div>

        </div>


    )

}