import styles from './HeaderCss.css';

export const Header = () => {

    const TypeWriter = function(txtElement, words, wait = 2000 ){
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    };

    TypeWriter.prototype.type = function(){
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        };

        this.txtElement.innerHTML = `<span className="txt">${this.txt}</span>`

        let typeSpeed = 100;

        if(this.isDeleting){
            typeSpeed /= 2;
        };

        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait;
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        };
        
       setTimeout(() => this.type(), typeSpeed);
    };

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        const txtElement = document.querySelector('.txt-type');
        console.log(txtElement)
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');

        new TypeWriter(txtElement, words, wait);
    }

    return(
        <>
        <h1 className='header-text-top'>Happiness is...</h1>
        <div className="typewriter-container">
            <span className="txt-type" data-wait="2000" data-words='["Buying your first home", "No hidden fees", "Best mortgage rates "]'></span>
        </div>
        {/* <h1 className="header-text">Buying your first home.</h1> */}
        </>
    )
}