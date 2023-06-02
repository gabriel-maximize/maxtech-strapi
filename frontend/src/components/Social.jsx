export function Social ({className}){
    return (
        <div className={`social ${className}`}>
            <a href="https://www.instagram.com/maxtecservic/" target="_blank" rel="noreferer" className="social__link social__link--instagram"><span>Instagram</span></a>
            <a href="https://www.facebook.com/MaxtecServicos" target="_blank" rel="noreferer" className="social__link social__link--facebook"><span>Facebook</span></a>
        </div>
    );
}

export default Social;
