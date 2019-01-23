import React from 'react';
import './SelectedBlock.css';

const SelectedBlock = (props) => {
		return (
				<div className='selectedFrame' style={{top: props.pos.y,left: props.pos.x}}>
					<div className='connectors'>
					<form action="/action_page.php" className="typeChooser">
					  <input list="type" name="type" />
					  <datalist id="type">
					    <option value="None" />
					    <option value="Hardware" />
					    <option value="Software" />
					  </datalist>
					</form>
					<form action="/action_page.php" className="kindChooser">
					  <input list="kind" name="kind" />
					  <datalist id="kind">
					    <option value="Arduino Uno" />
					    <option value="Arduino Leonardo" />
					    <option value="Arduino Mega" />
					    <option value="Raspberry Pi" />
					    <option value="BeagleBone" />
					  </datalist>
					</form>
					<div className='conIn'>
					<p>listen</p>
					{props.connectors.map((con)=>{
						// console.log(con);
					return(
						con.type === 'in' ? (
						<div key={con.name} className='connector'>

						</div>):null
					)
					})}
					</div>
					<div className='conOut'>
					<p>talk</p>
					{props.connectors.map((con)=>{
						// console.log(con.name);
					return(
						con.type === 'out' ? (
						<div key={con.name} className='connector'>

						</div>): null
					)
					})}
					</div>
					</div>
					<button className="selectedbutton">
						<div>
							<label className="label">
							Add NEW
							</label>
						</div>
					</button>
				</div>
		)}

export default SelectedBlock;
