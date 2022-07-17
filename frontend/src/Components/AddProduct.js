import React from 'react';

const AddProduct = ()=>{
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);

    const addProduct = async()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }

    return(
        <div>
            <h1>Add Product</h1>
            <br></br>
            <input className="inputBox" value={name} type="test" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter product name"></input>
            {error && !name &&<span className='invalid-input'>Enter valid name</span>}
            <br></br>

            <input className="inputBox" value={price} type="test" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter product price"></input>
            {error && !price &&<span className='invalid-input'>Enter valid price</span>}
            <br></br>

            <input className="inputBox" value={category} type="test" onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter product category"></input>
            {error && !category &&<span className='invalid-input'>Enter valid category</span>}
            <br></br>

            <input className="inputBox" value={company} type="test" onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter product company"></input>
            {error && !company &&<span className='invalid-input'>Enter valid company</span>}
            <br></br>

            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;