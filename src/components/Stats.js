
function Stats({items}){

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100) || 0;
    return (
      <footer className="stats">
  
        {percentage === 100 ? 'You got  everything! Ready to got':''}
       <em> 👜you have {numItems} items on your list and you already packed {numPacked} ( {percentage}%) </em>
      </footer>
    )
  }

  export default Stats;