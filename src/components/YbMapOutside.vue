<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1125 2436"
    style="enable-background:new 0 0 1125 2436;"
    xml:space="preserve"
  >
    <g id="sektor">
      <path
        id="sektorB"
        class="ost0"
        d="M389.7,866.8l319.1-3.1V797H736v-67.6H378c-66.8,10.1-107.4,51.3-118.8,102.5l58.2,14.8
		l27.2-27.2L389.7,866.8z"
      />
      <path
        id="sektorA"
        class="ost0"
        d="M386.6,1452.3l3.9-585.5l-45.8-47.4l-27.2,27.2l-58.2-14.8l-5.4,31.1l28.7,62.9l0.8,474.4
		l-29.5,52c-1.8,10.6,0.4,22.4,5.4,34.9l61.3-16.3l24.1,26.4L386.6,1452.3z"
      />
      <path
        id="SektorD"
        class="ost0"
        d="M386.6,1452.3H788l45,45l23.3-22.5l60.6,14.8c-17.8,54.8-55.6,83.2-107.2,93.2H386.6
		c-61.6,3.6-101.1-33.8-127.3-95.5l62.9-16.3l22.5,26.4L386.6,1452.3z"
      />
      <path
        id="SektorC"
        class="ost0"
        d="M788,1452.3V863l42.7-42.7l29.5,25.6l56.7-14.8c0,0,4.1,17.3,4.5,46.2
		c1.5,119.3,1.5,436.9,0,560.1c-0.4,30.4-3.9,49.6-4.5,52.1l-60.6-14.8l-23.3,22.5L788,1452.3z"
      />
      <path
        id="Guests"
        class="ost0"
        d="M708.8,863.7H788l42.7-43.5l29.5,25.6l56.7-14.8C901.9,778.6,867.1,742,802,729.4h-66v66.8h-27.2
		V863.7z"
      />
      <polygon
        id="Logen"
        class="ost0"
        points="253,1452.3 290.3,1400.3 291.3,925.9 253,863 	"
      />
      <text
        transform="matrix(-1.346898e-10 1 -1 -1.346898e-10 843.5186 1064.3916)"
        class="ost1 ost2 ost3 ost4"
      >
        SEKTOR C
      </text>
      <text
        transform="matrix(-3.142761e-10 1 -1 -3.142761e-10 326.6553 1064.2148)"
        class="ost1 ost2 ost3 ost4"
      >
        SEKTOR A
      </text>
      <text
        transform="matrix(1 0 0 1 497.1367 1528.5732)"
        class="ost1 ost2 ost3 ost4"
      >
        SEKTOR D
      </text>
      <text
        transform="matrix(1 0 0 1 445.3177 819.3141)"
        class="ost1 ost2 ost3 ost4"
      >
        SEKTOR B
      </text>
      <text
        transform="matrix(-3.142761e-10 1 -1 -3.142761e-10 257.6553 1091.5743)"
        class="ost1 ost2 ost3 ost4"
      >
        LOGEN
      </text>
      <text
        transform="matrix(1 0 0 1 750.4342 802.3795)"
        class="ost1 ost2 ost3 ost4"
      >
        GÄSTE
      </text>
    </g>
    <g id="portes">
      <circle v-if="($store.state.sector === 'A' || $store.state.sector === 'A') && !$store.state.handicap" id="porte3_1_" class="ost5" cx="334.5" cy="799.5" r="81.5" />
      <circle v-if="($store.state.sector === 'A' || $store.state.sector === 'D') && !$store.state.handicap" id="porte2_1_" class="ost5" cx="329.5" cy="1497.5" r="81.5" />
      <circle v-if="($store.state.sector === 'C' || $store.state.sector === 'D') && !$store.state.handicap" id="porte1_1_" class="ost5" cx="843.5" cy="1497.5" r="81.5" />
      <circle v-if="($store.state.sector === 'B' || $store.state.sector === 'C') && !$store.state.handicap" id="porte4_1_" class="ost5" cx="837.5" cy="804.5" r="81.5" />
      <text
      v-if="($store.state.sector === 'B' || $store.state.sector === 'C') && !$store.state.handicap"
        id="porte4text_1_"
        transform="matrix(1 0 0 1 817.4268 825.333)"
        class="ost2 ost6 ost7"
      >
        4
      </text>
      <text
        v-if="($store.state.sector === 'C' || $store.state.sector === 'D') && !$store.state.handicap"
        id="porte1text_1_"
        transform="matrix(1 0 0 1 820.7993 1518.3755)"
        class="ost2 ost6 ost7"
      >
        1
      </text>
      <text
        v-if="($store.state.sector === 'A' || $store.state.sector === 'A') && !$store.state.handicap"
        id="porte3text_1_"
        transform="matrix(1 0 0 1 310.0314 824.4037)"
        class="ost2 ost6 ost7"
      >
        3
      </text>
      <text
        v-if="($store.state.sector === 'A' || $store.state.sector === 'D') && !$store.state.handicap"
        id="porte2text_1_"
        transform="matrix(1 0 0 1 310.0316 1528.4037)"
        class="ost2 ost6 ost7"
      >
        2
      </text>
    </g>
    <g id="terrain">
      <rect
        id="herbe_1_"
        x="416.1"
        y="897.9"
        class="ost8"
        width="343.2"
        height="519.5"
      />
      <line class="ost9" x1="430" y1="912.7" x2="747.6" y2="912.7" />
      <line class="ost9" x1="747.6" y1="1402.6" x2="747.6" y2="912.7" />
      <line class="ost9" x1="430" y1="1402.6" x2="747.6" y2="1402.6" />
      <line class="ost9" x1="430" y1="912.7" x2="430" y2="1402.6" />
      <line class="ost9" x1="747.6" y1="1158.8" x2="426.9" y2="1158" />
      <line class="ost9" x1="494.5" y1="988" x2="494.5" y2="912.7" />
      <line class="ost9" x1="680.8" y1="988" x2="494.5" y2="988" />
      <line class="ost9" x1="680.8" y1="912.7" x2="680.8" y2="988" />
      <line class="ost9" x1="545.7" y1="936.7" x2="631.1" y2="937.5" />
      <line class="ost9" x1="545.7" y1="912.7" x2="545.7" y2="936.7" />
      <line class="ost9" x1="631.1" y1="912.7" x2="631.1" y2="937.5" />
      <path class="ost9" d="M555.3,988c21.3,24.8,48.5,23.5,69.9,0" />
      <line class="ost9" x1="680.9" y1="1328.2" x2="680.9" y2="1403.5" />
      <line class="ost9" x1="494.6" y1="1328.2" x2="680.9" y2="1328.2" />
      <line class="ost9" x1="494.6" y1="1403.5" x2="494.6" y2="1328.2" />
      <line class="ost9" x1="629.7" y1="1379.5" x2="544.3" y2="1378.7" />
      <line class="ost9" x1="629.7" y1="1403.5" x2="629.7" y2="1379.5" />
      <line class="ost9" x1="544.3" y1="1403.5" x2="544.3" y2="1378.7" />
      <path class="ost9" d="M621.1,1328.2c-21.3-24.8-48.5-23.5-69.9,0" />
      <circle class="ost9" cx="589.5" cy="1160.5" r="34.5" />
      <circle class="ost10" cx="588.5" cy="966.5" r="1" />
      <circle class="ost10" cx="591" cy="1159" r="1" />
      <circle class="ost10" cx="587.4" cy="1351.9" r="1" />
    </g>
    <g id="exterieur">
      <text
        transform="matrix(1 0 0 1 385.0684 1754.7188)"
        class="ost1 ost2 ost11 ost12"
      >
        Papiermühlestrasse
      </text>
      <text
        transform="matrix(1 0 0 1 384.8418 628.4795)"
        class="ost1 ost2 ost11 ost12"
      >
        Sempacherstrasse
      </text>
      <rect
        id="platz"
        x="0.5"
        y="729.5"
        class="ost13"
        width="170.5"
        height="799"
      />
      <text
        transform="matrix(-1.346898e-10 1 -1 -1.346898e-10 67.3828 971.8105)"
        class="ost1 ost2 ost11 ost12"
      >
        Quartierplatz
      </text>
      <path
       v-if="$store.state.handicap"
        id="backgroundHandi"
        class="ost5"
        d="M790.7,1584h20.6c5.3,0,9.7,4.3,9.7,9.7v52.6c0,5.3-4.3,9.7-9.7,9.7h-20.6
		c-5.3,0-9.7-4.3-9.7-9.7v-52.6C781,1588.3,785.3,1584,790.7,1584z"
      />
      <path
        id="route_4_"
        class="ost14"
        d="M0,1696h917c108.6-2.8,82.1-30.2,39.8-232.3c-7.1-33.8-19.3-28.2-34.3-28.2"
      />
      <line
        id="route_3_"
        class="ost14"
        x1="0.5"
        y1="1785.5"
        x2="1124.5"
        y2="1785.5"
      />
      <path
        id="route"
        class="ost14"
        d="M1125.5,1696.5c-17.3,1.5-87.2-297.3-123.7-332.3c-26.2-25.1-68.3-17.7-79.4-17.2"
      />
      <polyline
        id="route_1_"
        class="ost14"
        points="0.5,629.5 523.5,684.5 1125.5,673.5 	"
      />
      <line
        id="route_2_"
        class="ost14"
        x1="0.5"
        y1="533.5"
        x2="1126.5"
        y2="547.5"
      />
      <g>
        <g>
          <g>
            <path
              d="M807.2,1640c-0.5-0.4-1.2-0.4-1.6,0c-1.7,1.8-4,2.8-6.5,2.8c-4.9,0-8.9-4-8.9-8.9c0-3.1,1.6-5.9,4.2-7.5
					c0.5-0.3,0.7-1,0.4-1.5c-0.3-0.5-1-0.7-1.5-0.4c-3.3,2-5.2,5.6-5.2,9.4c0,6.1,5,11.1,11.1,11.1c3.1,0,6-1.2,8.1-3.5
					C807.6,1641.1,807.6,1640.4,807.2,1640z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M814.3,1639.1l-5.5-6.2c-0.2-0.2-0.5-0.4-0.8-0.4h-8.2v-11.1h8.2c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-9.3
					c-0.6,0-1.1,0.5-1.1,1.1v13.3c0,0.6,0.5,1.1,1.1,1.1h8.8l5.2,5.8c0.2,0.2,0.5,0.4,0.8,0.4c0.3,0,0.5-0.1,0.8-0.3
					C814.7,1640.2,814.8,1639.5,814.3,1639.1z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M801.4,1609.2c-2.2,0-3.9,1.8-3.9,3.9c0,2.2,1.8,3.9,3.9,3.9s3.9-1.8,3.9-3.9C805.3,1611,803.6,1609.2,801.4,1609.2z
					 M801.4,1614.8c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7S802.4,1614.8,801.4,1614.8z"
            />
          </g>
        </g>
        <line class="ost15" x1="801" y1="1604" x2="801" y2="1592" />
        <polygon class="ost16" points="796,1592 806,1592 801,1587 		" />
      </g>
    </g>
  </svg>
</template>

<style type="text/css">
.ost0 {
  fill: #b3b3b3;
  stroke: #000000;
  stroke-miterlimit: 10;
}
.ost1 {
  fill: #cccccc;
}
.ost2 {
  font-family: Arial, Helvetica, sans-serif;
}
.ost3 {
  font-size: 40px;
}
.ost4 {
  letter-spacing: 1;
}
.ost5 {
  fill: #face48;
}
.ost6 {
  font-size: 80px;
}
.ost7 {
  letter-spacing: 3;
}
.ost8 {
  fill: #006a29;
  stroke: #39b54a;
  stroke-miterlimit: 10;
}
.ost9 {
  fill: none;
  stroke: #ffffff;
  stroke-miterlimit: 10;
}
.ost10 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-miterlimit: 10;
}
.ost11 {
  font-size: 50px;
}
.ost12 {
  letter-spacing: 2;
}
.ost13 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-miterlimit: 10;
}
.ost14 {
  fill: none;
  stroke: #cccccc;
  stroke-miterlimit: 10;
}
.ost15 {
  stroke: #000000;
  stroke-width: 2;
  stroke-miterlimit: 10;
}
.ost16 {
  stroke: #000000;
  stroke-miterlimit: 10;
}
</style>
