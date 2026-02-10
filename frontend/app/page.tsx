"use client";

import { useEffect, useState } from "react";
import {supabase} from '../src/lib/supabase';


export default function Home(){
  const [fits, setFits] = useState<any[]>([]);
  const [err, setErr] = useState("");


  useEffect(()=>{
    (async () =>{
      const {data,error} = await supabase
      .from("fits")
      .select("code,label")
      .order("sort_order");

      if (error) setErr(error.message);
      else setFits(data ?? []);

    })();

  },[]);


  return(
    <main style={{padding:24}}>
      <h1>
        Bill of Materials
      </h1>
      {err? <p style={{color:"crimson"}}>{err}</p>:null}
      <pre>{JSON.stringify(fits,null,2)}</pre>
    </main>
  );

}