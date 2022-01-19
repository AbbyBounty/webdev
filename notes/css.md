
# CSS

    - Cascading Style sheet 
    - used to decorate the web page 
        _ manage the shapes 
        - size
        - colors
        - animations
        - make your websote responsive 
    -  not used for 
        - adding programming logic in the website
    
## how to use CSS into html 
    - inline css
    - internal css
    - external css
    - browser default css

## selectors in CSS
    - id selector (#)
    - class selector (.)
    - type selector (div , p , h1 )
    - universal selector (*)
    - attribute selector
    - Descendent selector
    - child selector 
    - general sibiling selector 

## pseudo selector 
    - pseudo class
    - pseudo element

## position
     - static 
     - absolute
     - fixed 
     - sticky 
     - inherit 
     - relative 

## box-sizing
    - by your element is included with padding , margin and border in width and height, so if you want to remove this scenario then you need to mention the box-sizing
    - box-sizing: border-box;

## CSS units
 - absolute units 
    - cm 
    - mm 
    - inch (1in = 96px = 2.54cm )
    - px (1px = 1/96th of 1inch)

- relative units
    - em :  relative to font-size (2em , twice  bigger than its current size)
    - rem: realtive to root element 
    - vw 
    - vh
    - vimn 
    - vmax
    - % 

## Display
    - flex
    - grid 

## Media queries
    - you can make your web page by writing media queries and adding it to CSS
    - e.g : 

    `html
     /* smartphone devices */
        @media screen and (min-width : 420px) {
            body {
                background-color: aquamarine;
            }

            .container {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
        }


        /* tables screen i.e. mediam size screen */
        @media screen and (min-width : 720px) {
            body {
                background-color: rgb(255, 200, 127);
            }

            .container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
        }


        /* desktop screen i.e. larger  */
        @media screen and (min-width : 1020px) {
            body {
                background-color: rgb(255, 127, 127);
            }

            .container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
            }
        }
    `
    