


const div = document.createElement('div')
div.className="container"
document.body.append(div)



//using async await function to get the data
 
async function getdata(){
  const response = await fetch('http://openlibrary.org/people/george08/lists/OL97L/seeds.json')
  const data = await response.json()
  console.log(data)
   let newarray=[];
   for(let i=0; i<data.entries.length; i++){
    newarray.push(data.entries[i])
   }

 console.log(newarray)
  newarray.forEach(e => {
     console.log(e)
     const div1 = document.createElement('div')
     div1.classList.add('title')
     const div1innerHtml = `<div class="head">
     <h3>${e.title}<h3>
     </div>
     <div class="image"><img class="img" src="${e.picture.url}"></div>
     <div class="button">
     <button type="button" >open</button></div>
     
     `
     div1.innerHTML = div1innerHtml
     div.append(div1)
   });
  
}
getdata()

