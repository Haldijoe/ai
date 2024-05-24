<script>
  import "./styles.css";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/stockPricePrediction">Stock Price Prediction (AAPL)</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<div class="container mt-3">
  <slot />
</div>
