let itemname=document.getElementById('itemname');
let descriptionInput=document.getElementById('description');
let priceInput=document.getElementById('price');
let quantityInput=document.getElementById('quantity');
let adddata=document.getElementById('adddata');

const saveData= async(e)=>{
    e.preventDefault();
    
    if( candynameInput.value=="" || descriptionInput.value ==""  || priceInput.value == "Choose Category" || quantityInput.value ==""   )
    {
        
        window.alert('Please Enter All fields');
    }

    else{

        let obj={
            itemname:itemname.value,
            description:descriptionInput.value,
            price:priceInput.value,
            quantity: quantityInput.value
    
        }
        try{

            let response= await axios.post('http://localhost:3000/add',obj)
             
                 console.log(response);
               showDataOnScreen(response.data.newitem);  
        }
        catch(err){
            console.log(err);
        }
        
    }
}

adddata.addEventListener('click',saveData);

window.addEventListener('DOMContentLoaded',async ()=>{

    try{

       let response= await axios.get('http://localhost:3000/load-data')
       
            // console.log(response);
            for(let i=0;i<response.data.allData.length;i++){
                showDataOnScreen(response.data.allData[i]);
            }
    }
    catch(err){
        console.log(err);
    }
    
})


function showDataOnScreen(obj){
    // console.log(obj);
    let parent=document.getElementById('tablebody');
    let childHTML=` <tr  id=${obj.id}>
                 
    <td>${obj.itemname}</td>
    <td>${obj.description}</td>
    <td>${obj.price}</td>
    <td>${obj.quantity}</td>
    <td><button id='${obj.id}-buy1' class="editbtn" onClick= buyOne(${obj.id})>Buy1</button><button id='${obj.id}-buy2' class="editbtn"  onClick= buyTwo(${obj.id})>Buy2</button><button id='${obj.id}-buy3' class="editbtn"  onClick= buyThree(${obj.id})>Buy3</button></td>
    
    </tr>`;
    parent.innerHTML+=childHTML;
    candynameInput.value="",
    descriptionInput.value="",
    priceInput.value="",
    quantityInput.value="";
    
   
  }


async function buyOne(id) {
  console.log(id);
    const Row = document.getElementById(id);
    const quantityCell = Row.children[3];
    const nameCell=Row.children[0];
    const descriptionCell=Row.children[1];
    const priceCell=Row.children[2];
    let quantity = Number(quantityCell.textContent);
    if (quantity > 0) {
      quantity -= 1;
      quantityCell.textContent = quantity;

      let obj={
        name:nameCell.textContent,
        description:descriptionCell.textContent,
        price:priceCell.textContent,
        quantity: quantityCell.textContent

    }
      try {
        const response = await axios.put(`http://localhost:3000/edit/${id}`,obj );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      window.alert('This candy is out of stock.');
    }
  }
  
  async function buyTwo(id) {
    const Row = document.getElementById(id);
    const quantityCell = Row.children[3];
    const nameCell=Row.children[0];
    const descriptionCell=Row.children[1];
    const priceCell=Row.children[2];
    let quantity = Number(quantityCell.textContent);
    if (quantity > 1) {
      quantity -= 2;
      quantityCell.textContent = quantity;

      let obj={
        itemname:nameCell.textContent,
        description:descriptionCell.textContent,
        price:priceCell.textContent,
        quantity: quantityCell.textContent

    }
      try {
        const response = await axios.put(`http://localhost:3000/edit/${id}`, obj);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      window.alert('This candy is out of stock.');
    }
  }

  async function buyThree(id) {
    const Row = document.getElementById(id);
    const quantityCell = Row.children[3];
    const nameCell=Row.children[0];
    const descriptionCell=Row.children[1];
    const priceCell=Row.children[2];
    let quantity = Number(quantityCell.textContent);
    if (quantity > 2) {
      quantity -= 3;
      quantityCell.textContent = quantity;

      let obj={
        itemname:nameCell.textContent,
        description:descriptionCell.textContent,
        price:priceCell.textContent,
        quantity: quantityCell.textContent

    }
      try {
        const response = await axios.put(`http://localhost:3000/edit/${id}`, obj);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      window.alert('This candy is out of stock.');
    }
  }
  
  
  
  
  
  
  
  