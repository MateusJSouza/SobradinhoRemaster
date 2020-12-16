(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }

})();

function pesquisa(el) {
    var display = document.getElementById(el).style.display;
                if(display == "none")
            document.getElementById(el).style.display = 'block';
                else
            document.getElementById(el).style.display = 'none';
}

const menuItems = document.querySelectorAll('.nav a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    // event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('#navcontent');
    const to = document.querySelector('#content').offsetTop;

    window.scroll(0, to);
}

var elemento = $(".acessibilidade");
    var fonte = parseInt(elemento.css('font-size'));

    var body = $("body");
    const fonteNormal = parseInt(body.css('font-size'));


    if (e == 'a') {
        fonte++;
    }
    if (e == 'd'){
        fonte--;
    }

    elemento.css("fontSize", fonte);