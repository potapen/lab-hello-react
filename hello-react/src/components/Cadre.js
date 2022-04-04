const Cadre = (props) => {
    return(
    <div>
      <img src={props.img} alt='alt'/>
      <h2>{props.title}</h2>
      <article>{props.article}</article>
    </div>
    )
  }
  export default Cadre
  