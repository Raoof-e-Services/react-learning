import { Link } from "react-router-dom";
import React from "react";
import "./style.css";
import {ALwaleed, summaryRoutes} from "./summaryData";






function MainSummary() {
  
    const const1 = Object.keys(ALwaleed[0]).map((cars) =>( <>{cars}<br/><br/> </>))
   const const2 = Object.values(ALwaleed[0]).map((cars) =>( <>{cars}<br/><br/> </>))
  // console.log(ALwaleed[0])
  // const const4 = Object.values(summaryRoutes);
  
  //  const const5 = summaryRoutes.map((r)=> (console.log(r.path)))
  
  return (
    <>
    
    <div>
      
      <h3>Summaryy</h3>
      <p className="summaryPara">
        This summary is set to show balance sheet as at 00-00-0000 and profit
        and loss statement for the period from 00-00-0000 to 00-00-0000. There
        are 00000 transactions dated after 00-00-0000 therefore they are not
        accounted for in this view.
      </p>
  
      <div className="summaryMain">
       
        <div className="borderr">
        <div className="summaryNav">
         <h5>Summary</h5>
         <button >Edit</button>
        </div>
        </div>
          
      <div className="summarySection">
       
        <div className="balance">
          <div className="align">
          <h5>Balance Sheet</h5>
          <p>As at 00-00-0000</p>
          </div>
          <div className="asset card">
            <div className="align2">
            <h3>Assets</h3>
            <h3>000000000000</h3>
            </div>

            <div className="align2 textColor">
             {/* {ALwaleed.map((index,val)=>{
              console.log(index.CompanyCarsTLoss,val,'testingg')
             
             })}   */}
          
            <Link>{const1}</Link>
            {summaryRoutes.map((index,val)=>(
              <div index={val}>
              <Link to={index.path}><p>{const2}</p></Link></div>
            ))}
            </div>
          </div>
        </div>
        
        <div className="proflos">
          <div className="align">
        <h5>Profit and Loss</h5>
        <p>For the period from 01-03-2023 to 01-04-2023</p>
        </div>
        <div className="income card">
          <div className="align2">
          <h3>Income</h3>
          <h3>000000000000</h3>
          
          </div>
        </div>
        </div>


        </div>
      </div>
    </div>
  
    </>
  );
  
}

export default MainSummary;
