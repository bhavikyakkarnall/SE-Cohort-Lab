import { useState } from "react";
import AddCatForm from './AddCat'

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '#' },
    { id: 2, name: 'Jaguar', latinName: 'Panthera onca', image: '#' },
    { id: 3, name: 'Cougar', latinName: 'Puma concolor', image: '#' },
    { id: 4, name: 'Lion', latinName: 'Panthera leo', image: '#' },
    { id: 5, name: 'Snow leopard', latinName: 'Panthera uncia', image: '#' },
    { id: 6, name: 'Leopard', latinName: 'Panthera pardus', image: '#' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: '#' },
];

function SingleCat({name, latinName, image}) {
    return (
            <>
               <div>
                <img src={image}></img>
                <h3>{name}</h3>
                <p>{latinName}</p>
               </div>
            </>
    )
}

 export default function BigCat() {
    
    const [list, setList] = useState([...cats])

    const CatList = list.map(cat => (
        <SingleCat key={cat.id} id={cat.id} image={cat.image} name={cat.name} latinName={cat.latinName}/>
    ));

    const alphabeticallySorting = function () {
        const sortedList = [...cats]
        sortedList.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        //   console.log("Sorted List: ", sortedList)
        setList(sortedList)
    }

    const reverseList = function () {
        const reverseSortedList = [...cats]
        reverseSortedList.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
        //   console.log("Reverse Sorted List: ", reverseSortedList)
        setList(reverseSortedList)
    }

    const pantheraFamilyList = function () {
        let targetElement = "Panthera"
        let pantheraFamilyList = cats.filter(cat => cat.latinName.toLowerCase().includes(targetElement.toLowerCase()));
        //   console.log("Panthera Family List: ", pantheraFamilyList)
        setList(pantheraFamilyList)
    }

    const ClearFliters = function() {
        setList(cats)
    }

    const handleAddCat = (newCat) => {
        const updatedCats = [...cats, { id: cats.length + 1, ...newCat }];
        setList(updatedCats);
      };

    return (
        <>
        <div>
            <div>
                <h3>Filters: </h3>
                <button onClick={alphabeticallySorting}>Sort</button>
                <button onClick={reverseList}>Reverse</button>
                <button onClick={pantheraFamilyList}>Panthera</button>
                <button onClick={ClearFliters}>Clear Filters</button>
            </div>
            {CatList}
        </div>
        <div>
            <AddCatForm onAddCat={handleAddCat}></AddCatForm>
        </div>
        </>
    )
}