import {motion} from "framer-motion";
import im from './images/nn.png';
function MainSection(){
    return(

        <main>
            <div className='section1'>
     <div className="heading">
        <motion.div
         animate = {{x:0, scale: 1}}
         initial={{x:-400}}
         transition={{ duration:0.6}}>
     <h2> your feet </h2>
     <h2>deserve </h2>
     <h2>the best</h2>
     </motion.div>
     </div>
   
    <p>your feet deserve the best and we're here to help you with our shoes.your feet deserve the best and we're here to help you with our shoes.</p>
   <div className="btn"> <button className="btn1">Shop <span>Now</span></button>
    <button className="btn2" > Category</button>
    </div>
    <div className="brandlogo">
        <p> Also Available On</p>

    <div className="brandshop">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADsUlEQVRYhbWWT2gcVRzHP8/sBsSkpkLUpdlQRAgptexuqrR6EcxqDipWacCLB4PJwUNpwEUwiAgt4sE/NHdLwIM1NFvw4CUU04JJs7HSRDYbD1VCNiRBiTtJDmnh62F3pjOZyc40ab/wmHlvfu/9vu/7+/3eG6hBUpOkjyXN6+HhlqRBSY/ihqQOSX8+RMdBRNoBjKQm4CbwLBFhWRYLCwtO3xhDIpEgkUhEXQJgFjiOpE+j0h7L59WdzSoWjzutwfXenc1qLJ+/HyXOoAjSVyoVdWezHmf1Wi6Xi0qgQBSr07293l3HYqFkIiqxFUogn88HOkhlMjrd2+sLid1eyWajEFAogQ/6+0MlzuVygSSi4JGwVDXG+MaGhoY8/b6+PgROux8YSaFz3GVnjCGTyfhs4o2Nnr6Au9vboQRiUVg2NzfT1dXl9JeXlymXy/w6OQnAxMRE1akUqNi+CdhOv7t4kR9HR5mbnfV8E2AIDlcooiTKWD6vtmQyMNHqlWMUhObAzMwMJ06edHZpPwEGz54l2d7Okc5OXuvp8akSJQdCFUil076ddWezWlpa8tjtVYG6BEqlUuDChULBY1cul30haXgQ50Bxft6R0y2tuyIAisWi825cz+Xl5dAI1CWwuLjoWdR+tyzLY/fDpUuB829MT4cSqBuC8fFx5/LZ7SgeGRnx2dhhSGcyqlQqdUNQl4A7tjtLL5VOqy2Z3LUM7fELw8N7JyD5r+LdWiqT8Y21JZMqlUr7I2D/jPh2WJO8oRYSy7KcW9FWKMx5JAI2iQvDww6RhlhMqUxG/QMDvpI8d/68+gcGZFmu2G8sSavT0soNadubE96T8I9v4bEkHH47PHujYKsMUx/Cav5eLR/7Bo6ccUy8ZXioB37rh6unYK2wfwKNB+DoJ/D6ErxTgaZO3w+Dl0BLB7xxG7b/hfHnq0T+ugx3NvZGYHUK5s7BT4dgswwbRWh90WNiJN0FGjyjdyy4+Rnc/gpUu4CS70PLMXjypSrReDO+OeslWJ+D1WuwcgW2/6meXCcuQ/wAzH0Or/7invWfkXQLeC5wB2sFmHwPNov3jsOdd6dxje38HXjqLUh/AY93wNp0lURLh9viupH0EfBlIAEbf4/B/Newfo2ge1ly+TbAM4Nw+F1oPV53WWDASGoEpoBUmDVbZVibgs1FWLlac2ggfrAanoNHofUFf3iCcR14ubYDPS3pSpQz4QHhe0lP2II5kHQKeBPoYre82Dt+B2aAUWPMz/bg/5AZ2OKL1i4FAAAAAElFTkSuQmCC" alt=""></img>
       
        
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEVHcEzy0UDInSPYqizbripqYVHWzHzy20Tq2F3u2VXzwTB3XBrz2D7ery315UnhsS0wcKL15k7y20oAbr4Hb7sHa7b64DH55DD82TEGheP45y8Kg9n63THxxi/4xzHuvC/+yjHlsyz80zLowysEetP/3h7vxBUHecyMp6L450G0qWhxlaQgi9hMkMB3pLTksBbWu1G0uomVnYXXyWSrIjT1AAAAFnRSTlMAcUl4/Q0a9T9Q7B20jsuoXL2GgoFsvBma+wAAAadJREFUOI11kw1zojAQhiN+BGxte+2dBoEQQggB+dL+//92uwmeIL1nnGHG53V32URCpmz9IPB35D/4r9XZUv0KftABPU+oVs/+bWJPwJnOOu2qiRup/Cd/euJ4eiSqhXTcu7wtlYOO8y9lAcAj/rQB+vS7U0GvpjM0Bux+ZvYYH+MuRLqCMYbreHVfW4XQxvqw0RDAKeJ/CmEFeBtpdQIJOJ+JBAqDuqm11nkuGfOJf1eOAouHQ44kiZQrErAZ32ETQfUxwBeB4hpGUWi08wkXK+LflaPDQI0DJBjgK7Kzml4793YRgM8BvUyER4hk0kK7yNLYTO0KiC0symomv030INxkdoQ9nhXoob4ZcwFatO3lUmdZyqHAAQ+DS5nkuc5hN9ooCNz6Pttk2diBkLXERJrCR7eqVKregE7TlIt3dyH2Ugjrcx0pFSn0NsDHG/XChRQ4dTJAgbLpXYBz734nPQHATLxWZVle+rHA+nGtPW4DwkBA3fqFhy57LCJaKKBqV8Ajcw5QRGAHha+QvW8Xf87tej9goIQlHF4W2mU+/vz++vBm9i+r/FSYRl4w2gAAAABJRU5ErkJggg==" alt=""></img>
        </div>
    </div>
                </div>

                <div className="section2">
                <motion.div
         animate = {{y:0,rotate:360, scale: 1}}
         initial={{y:-1000}}
         transition={{ duration:0.8}}
       
         >
            <div>
            <img src={im} alt=" "></img>

            </div>
  
  
        
  
              </motion.div>
                </div>
                
        </main>
    )
}
export default MainSection;