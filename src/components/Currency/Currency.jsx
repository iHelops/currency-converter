import React, { useEffect } from "react";
import currencyStore from "../../store/currency";
import styles from "./Currency.module.css";
import { observer } from "mobx-react-lite";

function Currency() {
	useEffect(() => {
		currencyStore.fetchCurrency();
	}, []);

	return (
		<div className={styles.currency}>
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td>Full name</td>
						<td>Price (руб.)</td>
					</tr>
					{currencyStore.getCurrency().map((item, index) => (
						<tr key={index}>
							<td>{item.charCode}</td>
							<td>{item.name}</td>
							<td>{item.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default observer(Currency);
