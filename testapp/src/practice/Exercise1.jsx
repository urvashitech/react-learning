import React, { useState } from 'react'

function Exercise1() {
    const allBrands = [
        {id : "1" , brandName:"puma"},
        {id : "2" , brandName:"adiddas"},
        {id : "3" , brandName:"nika"},
        {id : "4" , brandName:"fila"},
        {id : "5" , brandName:"reebok"}
    ]
    const [searched,setSearched] = useState("")
    const handleSearch = (e)=>{
        setSearched(e.target.value)
        
    }
    console.log(searched)
  return (
    <div className='' style={{marginLeft:"600px"}}>
        <h1>Welcome to shopcart</h1>
      <label> Search Brand Name : 
    <input onChange={handleSearch} style={{marginLeft:"10px"}} placeholder='Enter the brand Name'/>
      </label>
    
        <ul>

        {searched === "" ? allBrands.map((allBrand)=>(<li key = {allBrand.id}>{allBrand.brandName}</li>)): allBrands.filter((brand)=>(brand.brandName.toLocaleLowerCase ()=== searched.toLocaleLowerCase())).map((allBrand)=>(<li key={allBrand.id}>{allBrand.brandName}</li>))}
      </ul>
    
    </div>
  )
}

export default Exercise1
