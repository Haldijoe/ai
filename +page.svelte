<script>
	import { PUBLIC_BASE_URL } from "$env/static/public";
	import axios from "axios";

let volume = 98000000; 
let ma_20 = 150.0; 
let ma_50 = 148.0; 
let volatility = 1.2; 
let bollinger_high = 155.0; 
let bollinger_low = 145.0; 
let stochastic = 80.0; 
let momentum = 1.1; 
let rsi = 65.0; 
let macd = 1.5; 
let macd_signal = 1.2; 
let totalAssets = 350000000000; 
let retainedEarnings = 100000000000; 
let totalDebt = 100000000000; 
let netIncome = 60000000000; 
let freeCashFlow = 60000000000; 
let revenue = 380000000000; 
let grossProfitRatio = 0.4; 
let ebitda = 120000000000;
let eps = 6.0; 
let prediction = "...";


	function handleSubmit() {
		let url = "http://127.0.0.1:5000/api/prediction/stock";
		let data = {
			Volume: volume,
			MA_20: ma_20,
			MA_50: ma_50,
			Volatility: volatility,
			Bollinger_High: bollinger_high,
			Bollinger_Low: bollinger_low,
			Stochastic: stochastic,
			Momentum: momentum,
			RSI: rsi,
			MACD: macd,
			MACD_Signal: macd_signal,
			totalAssets: totalAssets,
			retainedEarnings: retainedEarnings,
			totalDebt: totalDebt,
			netIncome: netIncome,
			freeCashFlow: freeCashFlow,
			revenue: revenue,
			grossProfitRatio: grossProfitRatio,
			ebitda: ebitda,
			eps: eps,
		};
		console.log(url);
		axios
			.post(url, data)
			.then((response) => {
				prediction =
					"Predicted Price: " +
					response.data.prediction.toFixed(3) +
					" USD";
			})
			.catch((error) => {
				prediction = "Error: " + error.response.data.error;
			});
	}
</script>

<div class="container text-center">
	<h1>{prediction}</h1>

	<div class="input-container">
		<div>
			<label for="volume">Volume</label>
			<input
				type="number"
				id="volume"
				class="form-control"
				placeholder="Volume"
				aria-label="Volume"
				bind:value={volume}
			/>
		</div>
		<div>
			<label for="ma_20">MA 20</label>
			<input
				type="number"
				id="ma_20"
				class="form-control"
				placeholder="MA 20"
				aria-label="MA 20"
				bind:value={ma_20}
			/>
		</div>
		<div>
			<label for="ma_50">MA 50</label>
			<input
				type="number"
				id="ma_50"
				class="form-control"
				placeholder="MA 50"
				aria-label="MA 50"
				bind:value={ma_50}
			/>
		</div>
		<div>
			<label for="volatility">Volatility</label>
			<input
				type="number"
				id="volatility"
				class="form-control"
				placeholder="Volatility"
				aria-label="Volatility"
				bind:value={volatility}
			/>
		</div>
		<div>
			<label for="bollinger_high">Bollinger High</label>
			<input
				type="number"
				id="bollinger_high"
				class="form-control"
				placeholder="Bollinger High"
				aria-label="Bollinger High"
				bind:value={bollinger_high}
			/>
		</div>
		<div>
			<label for="bollinger_low">Bollinger Low</label>
			<input
				type="number"
				id="bollinger_low"
				class="form-control"
				placeholder="Bollinger Low"
				aria-label="Bollinger Low"
				bind:value={bollinger_low}
			/>
		</div>
		<div>
			<label for="stochastic">Stochastic</label>
			<input
				type="number"
				id="stochastic"
				class="form-control"
				placeholder="Stochastic"
				aria-label="Stochastic"
				bind:value={stochastic}
			/>
		</div>
		<div>
			<label for="momentum">Momentum</label>
			<input
				type="number"
				id="momentum"
				class="form-control"
				placeholder="Momentum"
				aria-label="Momentum"
				bind:value={momentum}
			/>
		</div>
		<div>
			<label for="rsi">RSI</label>
			<input
				type="number"
				id="rsi"
				class="form-control"
				placeholder="RSI"
				aria-label="RSI"
				bind:value={rsi}
			/>
		</div>
		<div>
			<label for="macd">MACD</label>
			<input
				type="number"
				id="macd"
				class="form-control"
				placeholder="MACD"
				aria-label="MACD"
				bind:value={macd}
			/>
		</div>
		<div>
			<label for="macd_signal">MACD Signal</label>
			<input
				type="number"
				id="macd_signal"
				class="form-control"
				placeholder="MACD Signal"
				aria-label="MACD Signal"
				bind:value={macd_signal}
			/>
		</div>
		<div>
			<label for="totalAssets">Total Assets</label>
			<input
				type="number"
				id="totalAssets"
				class="form-control"
				placeholder="Total Assets"
				aria-label="Total Assets"
				bind:value={totalAssets}
			/>
		</div>
		<div>
			<label for="retainedEarnings">Retained Earnings</label>
			<input
				type="number"
				id="retainedEarnings"
				class="form-control"
				placeholder="Retained Earnings"
				aria-label="Retained Earnings"
				bind:value={retainedEarnings}
			/>
		</div>
		<div>
			<label for="totalDebt">Total Debt</label>
			<input
				type="number"
				id="totalDebt"
				class="form-control"
				placeholder="Total Debt"
				aria-label="Total Debt"
				bind:value={totalDebt}
			/>
		</div>∏
		<div>
			<label for="netIncome">Net Income</label>
			<input
				type="number"
				id="netIncome"
				class="form-control"
				placeholder="Net Income"
				aria-label="Net Income"
				bind:value={netIncome}
			/>
		</div>
		<div>
			<label for="freeCashFlow">Free Cash Flow</label>
			<input
				type="number"
				id="freeCashFlow"
				class="form-control"
				placeholder="Free Cash Flow"
				aria-label="Free Cash Flow"
				bind:value={freeCashFlow}
			/>
		</div>
		<div>
			<label for="revenue">Revenue</label>
			<input
				type="number"
				id="revenue"
				class="form-control"
				placeholder="Revenue"
				aria-label="Revenue"
				bind:value={revenue}
			/>
		</div>
		<div>
			<label for="grossProfitRatio">Gross Profit Ratio</label>
			<input
				type="number"
				id="grossProfitRatio"
				class="form-control"
				placeholder="Gross Profit Ratio"
				aria-label="Gross Profit Ratio"
				bind:value={grossProfitRatio}
			/>
		</div>
		<div>
			<label for="ebitda">EBITDA</label>
			<input
				type="number"
				id="ebitda"
				class="form-control"
				placeholder="EBITDA"
				aria-label="EBITDA"
				bind:value={ebitda}
			/>
		</div>
		<div>
			<label for="eps">EPS</label>
			<input
				type="number"
				id="eps"
				class="form-control"
				placeholder="EPS"
				aria-label="EPS"
				bind:value={eps}
			/>
		</div>
	</div>

	<div class="mt-3">
		<button type="button" class="btn btn-primary" on:click={handleSubmit}
			>Predict Stock Price</button
		>
	</div>
</div>
