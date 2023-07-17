

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu()
{

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
};


class Carrusel
{
    constructor()
    {
        this._ventana = document.getElementById("carrusel-list");
        this._pista = document.getElementById("track");
        this._botones = document.querySelectorAll(".carrusel-arrow")
        this._imagenes = document.querySelectorAll(".carrusel");
        this._ventanaWidth = this._ventana;
        this._pistaWidth = this._pista.offsetWidth;
        this._imagenWidth = this._imagenes[0].offsetWidth;
        this._posicion = 1;
    }

    haciaAtras()
    {

       if (this._posicion > 1)
        {
            let posicionActual = parseFloat(this._pista.style.left || 0);
            this._pista.style.left = `${posicionActual + this._imagenWidth}px`;
            this._posicion--;
        }
        else
        {
            this._pista.style.right = 1;
            this._posicion = 0;
        }
    };

    haciaDelante()
    {
        if (this._posicion < this._imagenes.length)
        {
            let posicionActual = parseFloat(this._pista.style.left || 0);
            this._pista.style.left = `${posicionActual - this._imagenWidth}px`;
            this._posicion++;
            
        }
        else
        {
            this._pista.style.left = 0;
            this._posicion = 1;
        }

    };
};

const carruselInstancia = new Carrusel();