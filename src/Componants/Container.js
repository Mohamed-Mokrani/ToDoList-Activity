

const Container = ({activity, description, setActivity, setDescription, BtnClick}) => {
    
  return (
    
       <div className="container">
        <div className="input-div">
          <input
            type="text"
            placeholder="Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={BtnClick}>Submit</button>
      </div>
   
  )
}

export default Container