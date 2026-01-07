import React, { useState , useCallback, useEffect, useRef } from 'react' 
  
const PassGenerator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [CharAllowed, setCharAllowed] = useState(false);
    const [passwoed, setPassword] = useState("");
    const [isCopy, setIsCopy] = useState(false);
    // useRef

    const passwordRef = useRef(null);

    const PasswordGenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "0123456789";
      if(CharAllowed) str += "!@#$%^&*-=[]{}~";

      for (let i = 0; i <= length; i++) {
        
        let char = Math.floor(Math.random() * str.length + 1) 

        pass += str.charAt(char)
        
      }
      setPassword(pass)

    }, [length, numberAllowed, CharAllowed, setPassword])
  


    const copyThePassword = useCallback(()=>{
      // if i want to show some different for user then user select()
      passwordRef.current?.select();
      // if i want to set range then i can use setSelectionRange(starting point, ending point);
      // passwordRef.current?.setSelectionRange(0, 10);
      window.navigator.clipboard.writeText(passwoed)
      setIsCopy(true);
    }, [passwoed])

    useEffect(()=>{
      PasswordGenerator();
      setIsCopy(false)
    }, [length, numberAllowed, CharAllowed, PasswordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md  rounded-lg bg-gray-700 px-4 my-8 text-center  text-white '>
       
        <h1 className='text-white text-center font-bold my-3 py-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4  '>
        <input type="text" value={passwoed}
        className='outline-none text-white  border-white border-2 hover:border-blue-300 w-full py-1 px-3' 
        placeholder='Password' 
        ref={passwordRef}
         />
          <button onClick={copyThePassword}  className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >{isCopy ? "Copied": "Copy"}</button>
         

      </div>
      <div className='flex text-sm gap-x-2 justify-between pb-5 '>
        <div className=' flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length}  className=' cursor-pointer accent-amber-400 '
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className=' text-white' >Length: {length} </label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input type="checkbox" 
          defaultChecked={numberAllowed} 
          id='numInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}

          />
          <label htmlFor="numInput" >Number</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input type="checkbox" 
          defaultChecked={CharAllowed} 
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}

          />
          <label htmlFor="charInput" >Characters</label>
        </div>
      </div>
    </div>

    </>
  )
}

export default PassGenerator
