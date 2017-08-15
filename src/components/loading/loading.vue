<template>
	<div id="loding">
		<div class="k-loading">
      <div class="k-loader k-circle"></div>
    </div>
	</div>
</template>
<style scoped>
#loading{
}
.k-loading{
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-15px;
  margin-top:-10px;
}
.k-loader {
  display:inline-block;
  font-size:30px;
  position:relative;
  height:15px;
  width:30px;
}
.k-loader:before,.k-loader:after {
  content:"";
  display:block;
  height:15px;
  position:absolute;
  width:15px;
}
.k-loader:before {
  border-radius:50%;
  animation:k-loadingK 2s ease-in-out infinite,k-loadingM .66s ease-in-out infinite;
  background:#ee6362
}
.k-loader:after {
  border-radius:50%;
  animation:k-loadingL 2s ease-in-out infinite,k-loadingN .66s ease-in-out infinite;
  background:#2cb0b2
}
@keyframes k-loadingK {
  0% {
  left:0;
  transform:scale(1.1)
}
50% {
  left:100%;
  transform:scale(1)
}
100% {
  left:0;
  transform:scale(1.1)
}
}@keyframes k-loadingL {
  0% {
  left:100%;
  transform:scale(1.1)
}
50% {
  left:0;
  transform:scale(1)
}
100% {
  left:100%;
  transform:scale(1.1)
}
}
</style>