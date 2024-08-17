import './DeveloperSocial.css';
function DeveloperSocial(props){
    console.log(props.name)
    return(
        <ul id="DeveloperSocial">
            <li><a href="#">{props.name}</a></li>
           


        </ul>
           
    )
}
export default DeveloperSocial;