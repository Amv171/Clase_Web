import '../styles/Logo.css';
function Logo({url,alternative}){
return(
<img className="logo" src = {url} alt={alternative} />
);
};
export default Logo;