import { observer } from "mobx-react-lite";
import React from "react";
import currencyStore from "../../store/currency";
import converterStore from "../../store/converter";
import styles from "./Converter.module.css";

function Converter() {	
	return (
		<div className={styles.converter}>
			<div className={styles.row}>
				<input type="text" placeholder="Сумма" onChange={e => {converterStore.setValue(e.target.value | 0)}}/>
				<select defaultValue={'DEFAULT'} onChange={e => {converterStore.setInPrice(currencyStore.getPrice(e.target.value))}}>
					<option value="DEFAULT" disabled>SELECT</option>
					{currencyStore.getCurrency().map((item, index) => (
						<option value={item.charCode} key={index}>
							{item.charCode}
						</option>
					))}
				</select>
			</div>
			<div className={styles.row}>
				<input type="text" placeholder="Сумма" disabled value={converterStore.getConvertedValue()}/>
				<select defaultValue={'DEFAULT'} onChange={e => {converterStore.setToPrice(currencyStore.getPrice(e.target.value))}}>
					<option value="DEFAULT" disabled>SELECT</option>
					{currencyStore.getCurrency().map((item, index) => (
						<option value={item.charCode} key={index}>
							{item.charCode}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default observer(Converter);
