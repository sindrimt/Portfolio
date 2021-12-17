import React from "react";

const DayAnimation = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1066.67 600"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="577.01"
          x2="403.6"
          y1="507.64"
          y2="-316.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stopColor="#fedaaa"></stop>
          <stop offset="0.65" stopColor="#a2a7d2"></stop>
          <stop offset="1" stopColor="#6f8be8"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="597.12"
          x2="1119.01"
          y1="138.65"
          y2="-111.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stopColor="#fecaa0"></stop>
          <stop offset="0.43" stopColor="#5e6ec4"></stop>
          <stop offset="0.63" stopColor="#5b6dc3"></stop>
          <stop offset="0.8" stopColor="#506abf"></stop>
          <stop offset="0.95" stopColor="#4065b8"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="548.32"
          x2="191.79"
          y1="70.86"
          y2="-50.88"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="497.67"
          x2="-206.07"
          y1="188.59"
          y2="366.66"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="611.15"
          x2="-310.79"
          y1="195.4"
          y2="331.61"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="542.74"
          x2="594.67"
          y1="315.35"
          y2="188.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.26" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.86" stopColor="#f2c989"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="473.18"
          x2="502.76"
          y1="265.09"
          y2="192.77"
          xlinkHref="#linear-gradient-6"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="415.39"
          x2="454.03"
          y1="261.15"
          y2="166.68"
          xlinkHref="#linear-gradient-6"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-9"
          x1="379.77"
          x2="423.38"
          y1="239.63"
          y2="133"
          xlinkHref="#linear-gradient-6"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x1="312.76"
          x2="393.17"
          y1="233.49"
          y2="36.88"
          xlinkHref="#linear-gradient-6"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1="461.93"
          x2="1234.52"
          y1="211"
          y2="211"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-12"
          x1="760.9"
          x2="660.77"
          y1="478.4"
          y2="129.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.5" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.86" stopColor="#f2c989"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-13"
          x1="537.33"
          x2="537.33"
          y1="807.84"
          y2="57.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.16" stopColor="#ebeff2"></stop>
          <stop offset="0.52" stopColor="#78b9f9"></stop>
          <stop offset="0.94" stopColor="#154b91"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-14"
          x1="852.33"
          x2="852.33"
          y1="523.52"
          y2="143.04"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.13" stopColor="#372045" stopOpacity="0"></stop>
          <stop offset="0.86" stopColor="#7c4672"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-15"
          x1="986.33"
          x2="986.33"
          y1="500.74"
          y2="304.04"
          xlinkHref="#linear-gradient-14"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-16"
          x1="387.33"
          x2="387.33"
          y1="478.37"
          y2="206.6"
          xlinkHref="#linear-gradient-14"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-17"
          x1="215.33"
          x2="215.33"
          y1="504.24"
          y2="235.06"
          xlinkHref="#linear-gradient-14"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-18"
          x1="117.33"
          x2="117.33"
          y1="535.66"
          y2="271.66"
          xlinkHref="#linear-gradient-14"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-19"
          x1="694.83"
          x2="694.83"
          y1="518.44"
          y2="88.28"
          xlinkHref="#linear-gradient-14"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-20"
          x1="531.4"
          x2="588.45"
          y1="325.02"
          y2="497.56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#e8e2c1"></stop>
          <stop offset="0.12" stopColor="#ded9c0"></stop>
          <stop offset="0.22" stopColor="#c2c2be"></stop>
          <stop offset="0.36" stopColor="#969dbb"></stop>
          <stop offset="0.44" stopColor="#7682b8"></stop>
          <stop offset="0.85" stopColor="#07113b"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-21"
          x1="644.22"
          x2="701.43"
          y1="351.48"
          y2="524.48"
          xlinkHref="#linear-gradient-20"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-22"
          x1="621.42"
          x2="648.27"
          y1="386.21"
          y2="467.41"
          xlinkHref="#linear-gradient-20"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-23"
          x1="262.97"
          x2="330.43"
          y1="368.6"
          y2="572.63"
          xlinkHref="#linear-gradient-20"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-24"
          x1="555.9"
          x2="-18.02"
          y1="22.63"
          y2="662.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#e8e2c1"></stop>
          <stop offset="0.12" stopColor="#ded9c0"></stop>
          <stop offset="0.22" stopColor="#c2c2be"></stop>
          <stop offset="0.36" stopColor="#969dbb"></stop>
          <stop offset="0.44" stopColor="#7682b8"></stop>
          <stop offset="0.75" stopColor="#07113b"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-25"
          x1="437.89"
          x2="-133.34"
          y1="-82.19"
          y2="816.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.08" stopColor="#56316b"></stop>
          <stop offset="0.51" stopColor="#3b124a"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-26"
          x1="453.58"
          x2="291.55"
          y1="207.54"
          y2="462.53"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.09" stopColor="#31466b"></stop>
          <stop offset="0.51" stopColor="#14124a"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-27"
          x1="314.28"
          x2="277.78"
          y1="190.34"
          y2="247.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#ebd93f"></stop>
          <stop offset="0.68" stopColor="#eb86d4"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-28"
          x1="483.51"
          x2="380.18"
          y1="213.28"
          y2="375.9"
          xlinkHref="#linear-gradient-27"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-29"
          x1="539.56"
          x2="59.36"
          y1="-65.36"
          y2="496.8"
          xlinkHref="#linear-gradient-20"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-30"
          x1="299.68"
          x2="-250.33"
          y1="-39.68"
          y2="825.9"
          xlinkHref="#linear-gradient-26"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-31"
          x1="350.4"
          x2="25.27"
          y1="120.36"
          y2="632.03"
          xlinkHref="#linear-gradient-26"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-32"
          x1="381.85"
          x2="259.08"
          y1="211.5"
          y2="404.71"
          xlinkHref="#linear-gradient-26"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-33"
          x1="394.19"
          x2="254.31"
          y1="171.11"
          y2="391.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#ebd93f"></stop>
          <stop offset="0.69" stopColor="#eddabb"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-34"
          x1="433.53"
          x2="325.53"
          y1="271.04"
          y2="441"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-35"
          x1="160.29"
          x2="109.64"
          y1="157.66"
          y2="237.37"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-36"
          x1="561.14"
          x2="-91.31"
          y1="-200.98"
          y2="579.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#e8e2c1"></stop>
          <stop offset="0.12" stopColor="#ded9c0"></stop>
          <stop offset="0.22" stopColor="#c2c2be"></stop>
          <stop offset="0.36" stopColor="#969dbb"></stop>
          <stop offset="0.44" stopColor="#7682b8"></stop>
          <stop offset="0.88" stopColor="#07113b"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-37"
          x1="215.11"
          x2="-110.25"
          y1="204.57"
          y2="716.61"
          xlinkHref="#linear-gradient-26"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-38"
          x1="157.51"
          x2="65.56"
          y1="298.21"
          y2="442.92"
          xlinkHref="#linear-gradient-26"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-39"
          x1="56.21"
          x2="-28.03"
          y1="197.05"
          y2="329.64"
          xlinkHref="#linear-gradient-25"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-40"
          x1="90.51"
          x2="334.91"
          y1="338.69"
          y2="236.38"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-41"
          x1="156.13"
          x2="219.93"
          y1="360.98"
          y2="334.28"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-42"
          x1="200.94"
          x2="100.08"
          y1="319.39"
          y2="478.12"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-43"
          x1="285.46"
          x2="428.78"
          y1="450.9"
          y2="266.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.07" stopColor="#1b0e29"></stop>
          <stop offset="0.38" stopColor="#44323b"></stop>
          <stop offset="1" stopColor="#ebc453"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-44"
          x1="319.96"
          x2="387.22"
          y1="398.63"
          y2="311.98"
          xlinkHref="#linear-gradient-43"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-45"
          x1="260.26"
          x2="311.41"
          y1="383.25"
          y2="361.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.07" stopColor="#1b0e29"></stop>
          <stop offset="0.54" stopColor="#44323b"></stop>
          <stop offset="1" stopColor="#ebc453"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-46"
          x1="269.45"
          x2="313.74"
          y1="383.01"
          y2="364.47"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-47"
          x1="278.46"
          x2="316.82"
          y1="382.79"
          y2="366.73"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-48"
          x1="285.52"
          x2="321.12"
          y1="383.2"
          y2="368.3"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-49"
          x1="292.78"
          x2="328.11"
          y1="383.67"
          y2="368.88"
          gradientTransform="rotate(24.26 303.375 379.234)"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-50"
          x1="298.86"
          x2="334.95"
          y1="384.64"
          y2="369.53"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-51"
          x1="304.15"
          x2="338.22"
          y1="384.42"
          y2="370.15"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-52"
          x1="310.21"
          x2="341.95"
          y1="384.69"
          y2="371.4"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-53"
          x1="316.51"
          x2="346.46"
          y1="384.98"
          y2="372.45"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-54"
          x1="322.06"
          x2="350.64"
          y1="385.23"
          y2="373.27"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-55"
          x1="326.53"
          x2="353.59"
          y1="385.43"
          y2="374.1"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-56"
          x1="330.63"
          x2="357.43"
          y1="385.67"
          y2="374.45"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-57"
          x1="335.47"
          x2="361.72"
          y1="386.17"
          y2="375.18"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-58"
          x1="339.77"
          x2="365.31"
          y1="386.39"
          y2="375.7"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-59"
          x1="343.9"
          x2="368.9"
          y1="386.71"
          y2="376.24"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-60"
          x1="347.48"
          x2="373.41"
          y1="387.1"
          y2="376.25"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-61"
          x1="352"
          x2="376.56"
          y1="387.39"
          y2="377.1"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-62"
          x1="356.06"
          x2="381.71"
          y1="387.9"
          y2="377.16"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-63"
          x1="360.36"
          x2="386.84"
          y1="388.33"
          y2="377.25"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-64"
          x1="365.5"
          x2="391.43"
          y1="388.74"
          y2="377.89"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-65"
          x1="370.23"
          x2="395.85"
          y1="389.19"
          y2="378.47"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-66"
          x1="374.98"
          x2="399.39"
          y1="389.32"
          y2="379.1"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-67"
          x1="379.65"
          x2="410.37"
          y1="390.39"
          y2="377.53"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-68"
          x1="385.4"
          x2="422.59"
          y1="392.03"
          y2="376.47"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-69"
          x1="389.68"
          x2="436.02"
          y1="393.96"
          y2="374.56"
          xlinkHref="#linear-gradient-45"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-70"
          x1="303.59"
          x2="445.13"
          y1="427.43"
          y2="358.51"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#1b0e29"></stop>
          <stop offset="0.51" stopColor="#44323b"></stop>
          <stop offset="1" stopColor="#ebc453"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-71"
          x1="171.19"
          x2="414.66"
          y1="434.86"
          y2="393.52"
          xlinkHref="#linear-gradient-70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-72"
          x1="239.37"
          x2="467.74"
          y1="423.88"
          y2="385.11"
          xlinkHref="#linear-gradient-70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-73"
          x1="331"
          x2="396.46"
          y1="406.88"
          y2="395.76"
          xlinkHref="#linear-gradient-70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-74"
          x1="352.33"
          x2="436.13"
          y1="405.92"
          y2="391.7"
          xlinkHref="#linear-gradient-70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-75"
          x1="313.28"
          x2="385.27"
          y1="410.56"
          y2="398.33"
          xlinkHref="#linear-gradient-70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-76"
          x1="337.45"
          x2="420.57"
          y1="408.45"
          y2="394.34"
          gradientTransform="rotate(56.36 354.822 405.472)"
          xlinkHref="#linear-gradient-70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-77"
          x1="356.14"
          x2="390.59"
          y1="421.16"
          y2="397.51"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#1b0e29"></stop>
          <stop offset="0.51" stopColor="#44323b"></stop>
          <stop offset="0.96" stopColor="#ebc453"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-78"
          x1="308.96"
          x2="391.84"
          y1="453.9"
          y2="397"
          xlinkHref="#linear-gradient-70"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-79"
          x1="684.11"
          x2="1165.64"
          y1="90.28"
          y2="570.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#e8e2c1"></stop>
          <stop offset="0.42" stopColor="#7682b8"></stop>
          <stop offset="0.75" stopColor="#07113b"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-80"
          x1="869.65"
          x2="1165.96"
          y1="225.47"
          y2="520.72"
          xlinkHref="#linear-gradient-26"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-81"
          x1="678.07"
          x2="878.84"
          y1="230.97"
          y2="431.02"
          xlinkHref="#linear-gradient-26"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-82"
          x1="931.51"
          x2="997.66"
          y1="165.27"
          y2="231.18"
          xlinkHref="#linear-gradient-25"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-83"
          x1="668.32"
          x2="838.32"
          y1="163.79"
          y2="333.18"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-84"
          x1="909.75"
          x2="1063.81"
          y1="60.18"
          y2="213.69"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-85"
          x1="586.53"
          x2="758.17"
          y1="233.5"
          y2="404.52"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-86"
          x1="834.17"
          x2="935.65"
          y1="152.85"
          y2="253.96"
          gradientTransform="rotate(-1.82 866.273 193.233)"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-87"
          x1="69.31"
          x2="259.54"
          y1="759.65"
          y2="414.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.24" stopColor="#070a1f"></stop>
          <stop offset="0.87" stopColor="#0c101f"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-88"
          x1="13.33"
          x2="144.33"
          y1="517.5"
          y2="517.5"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-89"
          x1="169.33"
          x2="332.33"
          y1="574.5"
          y2="574.5"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-90"
          x1="1043.18"
          x2="760.43"
          y1="940.66"
          y2="404.99"
          xlinkHref="#linear-gradient-87"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-91"
          x1="700.33"
          x2="845.33"
          y1="542.5"
          y2="542.5"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-92"
          x1="888.33"
          x2="1069.33"
          y1="458"
          y2="458"
          xlinkHref="#linear-gradient-33"
        ></linearGradient>
      </defs>
      <g>
        <path
          fill="url(#linear-gradient)"
          d="M0.33 0H1066.33V600H0.33z"
          data-name="sky"
        ></path>
        <g fill="#eadf9b">
          <path
            d="M.33 47a1509.72 1509.72 0 00237 59 1508.86 1508.86 0 00244 20q162.26-15.93 334-39 207.38-28.08 399-63l-50 52-669 74-553-42q29.01-30.49 58-61z"
            opacity="0.19"
          ></path>
          <path
            d="M48.33-10c33.23 12.16 68.57 23.64 106 34a1396.59 1396.59 0 00344 50 1260.2 1260.2 0 01-187-37 1261.51 1261.51 0 01-230-89zM607.33 211a795.45 795.45 0 00156-21c120.59-28.79 171.38-71.52 287-85a564.77 564.77 0 01110-2 966.107 966.107 0 01-72 35c-34.12 14.88-180 76.13-390 84a1197.1 1197.1 0 01-172-6z"
            opacity="0.19"
          ></path>
        </g>
        <image
          width="153"
          height="153"
          transform="translate(547.33 39)"
          xlinkHref="data:image/png;base64,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"
        ></image>
        <g>
          <g data-name="clouds up">
            <path
              fill="url(#linear-gradient-2)"
              d="M680.66 91l98.21-29.2q-20.68 13.08-18.38 15.34 6.27 6.2 183.28-68.14l-40.46 6.73c5.13-16.26 1-19.36-1.89-20-9.91-2.16-34.42 17.48-45.67 26.9-.23-.56-4-9.22-15.21-10-11.67-.78-28.24 7.16-32.87 19.43C804 21 786.23 16.28 770.68 20.23c-16.94 4.32-28.91 18.4-21.69 29.58-16.71-3.69-30.84-2.49-34.42 1.22-4 4.11 5.39 11 6.38 11.7-11.13-3.94-24.61-.48-28.68 4.41-2.84 3.42-1.4 7.9 3.2 11.1z"
              opacity="0.53"
            ></path>
            <path
              fill="url(#linear-gradient-3)"
              d="M402.33 41q28 10.08 56 20 41.44 14.67 83 29l-18-8a10.26 10.26 0 10-14-15c.16-10-5.64-16.25-10-16-3.27.18-6.43 4.09-8 9q-10.95-36.73-18-36-5.83.62-9 27c-4.71-8.11-9.49-13-12-12-2.79 1.08-2.16 9.13-2 11-7-13.56-10.32-15.45-12-15-1.41.38-2.83 2.75-3 11-7.23-16-19.46-22.85-26-20-5.99 2.61-6.87 13.21-7 15z"
              opacity="0.53"
            ></path>
          </g>
          <path
            fill="url(#linear-gradient-4)"
            d="M2.33 209c-2.33-20.69-6.73-59.62 17-75 21.64-14 52.45.74 57 3 .92-2.38 5.82-14.35 19-20a35.32 35.32 0 0121-2 27.45 27.45 0 0135-38c2.83-3.66 16.39-20.47 33-19 21.9 1.94 33.19 34.21 35 54 1.68 18.33-4.12 33.1-8 41 7.31-14.8 22.65-23.57 38-22 18.25 1.86 33.28 18 34 38 1.86-22.12 15.7-39.43 33-43 12.35-2.55 22.88 2.65 27 5-8.75-41.1-1-77 18-86 25.57-12.1 64.82 27.45 82 52 35.15 50.2 27.64 108.54 24 129 9.31-10.57 24.95-12.51 36-5 12 8.13 15.44 25.23 7 38 15-2.31 29.1 4.36 35 16 5.42 10.69 1.87 21.55 1 24 4.21-.88 24.47-4.64 43 8a54.12 54.12 0 0118 21l119 14-676-35c-16.54-17.5-42.7-51.08-48-98z"
            data-name="clud left back"
            opacity="0.53"
          ></path>
          <g data-name="cloud left">
            <path
              fill="url(#linear-gradient-5)"
              d="M137.33 296c23.43-49.09 61.46-81.05 99-79a66.69 66.69 0 0126 7c-20.15-9.19-26-30.11-20-40 5.82-9.51 25.76-13.84 43-2 2.1-37 21.58-63.24 38-64 17.88-.83 43.33 28.06 43 73 6.2-10.1 17.44-14.73 26-12 11.19 3.57 18.69 20 11 35 7.17-8.48 19.53-10 28-4 9.26 6.55 11.46 20.36 4 30 1.16-1.85 10.77-16.59 28-18 16.42-1.34 32.88 10 39 28 7.81-5.26 22.62-13.26 40-11 29.29 3.81 55.11 35.35 58 78z"
              opacity="0.53"
            ></path>
            <path
              fill="url(#linear-gradient-6)"
              d="M520.33 241a55.31 55.31 0 0123 4c5 2.07 13.82 6.63 29 26a225 225 0 0125 40 78.75 78.75 0 00-6-30c-3.08-7.39-12.07-28.94-35-38-15.04-5.94-29-3.71-36-2z"
            ></path>
            <path
              fill="url(#linear-gradient-7)"
              d="M465.33 222a53.3 53.3 0 0127 20 51.23 51.23 0 018 19 28.84 28.84 0 001-13c-1.95-12.31-12.18-21.82-23-25a32.09 32.09 0 00-13-1z"
            ></path>
            <path
              fill="url(#linear-gradient-8)"
              d="M424.33 207a25.77 25.77 0 018 9c7.38 14.08-2.25 29.82-3 31a21.78 21.78 0 00-5-40z"
            ></path>
            <path
              fill="url(#linear-gradient-9)"
              d="M391.33 179a35.87 35.87 0 016 9c7.36 15.74.79 31.93-1 36a35 35 0 009-15c1.24-4.26 3.19-10.93 0-18-3.8-8.45-12.2-11.41-14-12z"
            ></path>
            <path
              fill="url(#linear-gradient-10)"
              d="M325.33 118a59.82 59.82 0 0118 13c26.82 28.49 14.43 74.05 13 79a65.22 65.22 0 008-22c.77-4.58 4.35-28.88-12-50a63.4 63.4 0 00-27-20z"
            ></path>
          </g>
          <g data-name="cloud right">
            <path
              fill="url(#linear-gradient-11)"
              d="M540.33 328.67c-1.87-1.91-8.43-8.78-6-14.17 3.07-6.78 20-10.23 42-5-1.35-1.45-13.73-14.92-9-20.83 4.18-5.21 21.3-4.05 42 5-11-24.86.18-49.17 20-56.66 16.61-6.27 34.57 1 38 2.5-.62-9.92-2.07-53.53 36-85.82 29.43-25 83-43.62 103-27.49 16 12.93 9.46 47.46-17 81.65q39.54-35.46 51-30 6.46 3.07 4 19.16c1.07-4.34 5.71-20.58 24-31.66a68.59 68.59 0 0128-9.17c-11.11-3.91-17.23-13.6-15-22.49 2.61-10.38 16.08-17.71 30-15 1.73-16.56 11.21-31.57 26-36.66 22.24-7.66 58.21 6.47 70 39.16 43-22 65.4-19 77-14.17 68.06 28.19 9.87 219.39 5 235z"
              opacity="0.53"
            ></path>
            <path
              fill="url(#linear-gradient-12)"
              d="M575.33 308q-8.24-9.83-6-14 4.35-8.08 48 5a31.27 31.27 0 01-4-12 38.22 38.22 0 015-21c7.51-13.45 31.52-22.34 61-20-5.36-18-4.07-31.92-2-41 9.8-42.82 59.35-75.83 124-82a78.19 78.19 0 00-12-2c-18.6-1.63-33 3.85-41 7-13.42 5.28-59.92 23.59-76 71a103.26 103.26 0 00-5 41c-15.27-9.31-34.66-8-48 3-14.62 12.09-19 33.43-10 51a55.81 55.81 0 00-27-8c-5.76-.14-13.72-.33-16 4-2.18 4.16 1.33 11.59 9 18z"
              opacity="0.44"
            ></path>
          </g>
        </g>
      </g>
      <g>
        <g>
          <path
            fill="url(#linear-gradient-13)"
            d="M-25.67 311l1131 12 32 419-1200-41q18.51-195 37-390z"
          ></path>
          <path
            fill="#e6f6ff"
            d="M73.33 458c-6.59 16.89 16.41 40.26 26 50 46.78 47.51 115.84 53.32 236 48 104.56-4.63 279.87-19.1 279-33-1-16.12-237.83-10-238-19-.18-10.24 303.19-20.52 303-29-.11-5.26-116.61 2.9-293-10-185.27-13.55-299.98-40.35-313-7z"
            opacity="0.39"
          ></path>
          <path
            fill="#bbd9ea"
            d="M951.33 403c-186.51 31-264.93 25.19-264 40 1.89 30 180.88 35.67 180 48-1.28 18-381.84.79-383 17-.91 12.72 232.63 31.6 232 49-.84 23.52-428.81 15.17-429 24-.44 21 724.06 138.4 796-39 14.48-35.69 11.51-105.48-25-134-25.33-19.83-58.48-13.07-107-5z"
            opacity="0.69"
          ></path>
          <path
            fill="#9cf"
            d="M854.33 439l-667-5-80-25 93 2q301.47 6.15 603 8z"
          ></path>
          <path
            fill="#bbd9ea"
            d="M565.33 402l-208-1 77 24 358-2z"
            opacity="0.69"
          ></path>
          <path
            fill="#81c8ef"
            d="M618.33 477c183.31-5.66 333.65-1.19 437 4-57 4.05-139.46 9.05-239 12-201.91 6-404.93 1.48-405-4-.06-4.7 149.45-10.22 207-12z"
            opacity="0.28"
          ></path>
          <path
            fill="#bbd9ea"
            d="M.33 455c97.41-28.82 193.14-8.17 193 1-.14 9.58-105 10.14-105 19 0 15.88 336.21 27 336 34-.16 5.69-222.54.81-223 10-.47 9.57 240.31 22.07 240 33-.42 15.23-468.87 18-470-3-.49-9.18 88-20.42 87-30-1.26-11.85-137 1.73-141-19-2.49-12.86 46.61-34.23 83-45z"
            opacity="0.69"
          ></path>
          <path
            fill="#dcf3ff"
            d="M411.33 524c83.61 4.28 171 6.79 262 7 84.48.19 165.89-1.62 244-5q-123.48-2.46-247-3-129.49-.56-259 1z"
          ></path>
          <path
            fill="#508ab2"
            d="M129.33 550q0 3.51 474 3l-377-7q-97.01 2.42-97 4z"
            opacity="0.43"
          ></path>
          <path
            fill="#508ab2"
            d="M145.33 507c0 1.46 115.43 5.89 245 6 104.62.09 202-2.66 202-4 0-1-76-1.37-228-2-145.99-.61-218.98-.91-219 0z"
            opacity="0.48"
          ></path>
          <path
            fill="#508ab2"
            d="M369.33 471c.05 2.63 458-1.94 458-5 0-1.87-171.22-4.64-359 1-29.33.88-99.02 3-99 4z"
            opacity="0.4"
          ></path>
          <path
            fill="#6ca6e5"
            d="M101.33 427c0-4.63 152.11-12.4 317-1 8.36.58 110.16 7.62 110 11-.33 6.91-427-2.24-427-10z"
            opacity="0.25"
          ></path>
          <path
            fill="#dcf3ff"
            d="M194.33 438h230l48 4-316 1zM539.33 464c302.49-7.08 385-8.54 385-8 0 .35-34.48 1.37-118 5-60 2.61-69.22 3.26-89 4-42.33 1.59-102.57 2.48-178-1zM.33 472q348 10.38 348 13t-382-3z"
          ></path>
          <path
            fill="#f2fbfc"
            d="M550.33 417c-16.89.6-38.69 2.19-39 0-.22-1.65 11.95-3.45 12-7 .07-4.59-20.18-6.9-20-9 .28-3.2 47.56-1.82 99 2 4.47.33 33.06 2.48 33 4-.06 1.81-40.81 1-41 4-.13 2.19 21.14 4.43 21 6-.15 1.76-27.07-1.36-65 0z"
          ></path>
          <path
            fill="#fcf0e6"
            d="M642.33 421c-15.83.53-31.05 3.29-31 5 .07 1.9 19 2.17 19 4 0 2.14-26 3-26 5-.09 4.19 114.8 10.54 115 8 .11-1.33-31.17-4.54-31-7 .14-1.94 19.67-.5 20-3 .44-3.22-30.91-13.18-66-12z"
          ></path>
          <path
            fill="#fff8f3"
            d="M242.33 400c-2.29.13-5 .58-5 1s1.24.37 5 1c3 .51 6 1.07 6 1s-3-.54-3-1 4.95-.51 5-1c.03-.23-3.41-1.26-8-1z"
          ></path>
          <path
            fill="#ffd7b3"
            d="M240.14 403.14a6.87 6.87 0 003.17.83 7.78 7.78 0 004-1 12.38 12.38 0 01-5.13 0 12.6 12.6 0 01-4.28-1.82 7 7 0 002.24 1.99zM251.33 402.31c-.1-.41-2.9-.41-3 0-.05.23.71.69 1.5.69s1.55-.46 1.5-.69z"
          ></path>
          <path
            fill="#fff"
            d="M389.33 408c-2.32.46-5.08 1.42-5 2 .13.83 6 .48 6 1s-3 .73-3 1c.05.55 11 .41 11 0s-6-.58-6-1 7-.63 7-1-6-.42-6-1c0-.41 3-.67 3-1s-3.33-.71-7 0z"
          ></path>
          <path
            fill="#fff8f3"
            d="M285.33 391c-3.13 0-6 .63-6 1s5 .4 5 1-7 1.47-7 2c.06.8 16 .48 16 0 0-.32-7-.59-7-1s7.91-.12 8-1c.07-.67-4.33-2-9-2z"
          ></path>
          <path
            fill="#fff"
            d="M421.33 401c-4.57-.24-8-.17-8 0s5 .35 5 1-7 1.47-7 2c.06.77 15 .52 15 0 0-.33-6-.59-6-1s10-.49 10-1-5.54-.82-9-1z"
          ></path>
          <path
            fill="#bbd9ea"
            d="M153.33 358c.82-9 164.37 20.38 385 3 33-2.6 99.66-8.8 189-1 66.69 5.82 134.47 18.43 134 23-.72 7.05-164.06-3.09-164-5 .08-2.38 255.89.48 256 7 .15 8.59-443.28 25.7-444 15-.32-4.9 92.35-14.93 92-18-.39-3.5-120.23 16.83-271 6-91.58-6.58-177.59-23.44-177-30z"
            opacity="0.69"
          ></path>
          <path
            fill="#bbd9ea"
            d="M474.33 316h195l-89 21 54 14-97-4c46.86 7.72 67.29 12.88 67 16-1 10.61-242.07-1.31-242-5 0-1.76 55-2.3 146-2q-53.15-5.78-53-9 .17-3.47 62-4l-133-27z"
            opacity="0.69"
          ></path>
          <path
            fill="#e3f1ff"
            d="M-3.67 439c19 1.23 48.51 2.91 85 4 17.28.52 66.78 1.94 67-1 .2-2.56-37.13-5.87-37-9 .28-6.55 156-.3 157-12 .81-9.73-93.72-24.83-93-29 .62-3.55 69.26 6.25 70 2 .54-3.05-34.42-10.95-34-13 .77-3.73 117.12 18.72 119 11 .8-3.26-19.68-8.72-19-13 1.88-11.81 161.15 7.23 162 1 .47-3.41-46.58-14.2-97-21-15.57-2.1-64-8.21-161-7-80.26 1-121.32 3.87-169 25a292.87 292.87 0 00-55 32q2.51 15 5 30z"
          ></path>
          <path
            fill="#8dd9f7"
            d="M621.33 327c-26.47 3.93-55.26 9.71-55 12s33.4-.72 34 3c.9 5.54-71.77 18-71 25 1 9 122.29 5.7 148 5 32.15-.88 63.59-2.41 64 1 .53 4.32-49.42 11.54-49 16 .86 9 207-7 208 2 .46 4.21-71.39 14-71 17 .36 2.71 58.13-4 59 1 .79 4.53-45.52 13.49-45 18 .78 6.68 104 .52 226-9-44.61-41.29-86.87-63.58-116-76-111.86-47.72-220.97-31.5-332-15z"
          ></path>
          <path
            fill="url(#linear-gradient-14)"
            d="M746.33 386l-8 109 152-9 2-63 67-43q3.51-16 7-32z"
          ></path>
          <path
            fill="url(#linear-gradient-15)"
            d="M892.33 423l-2 63 192-8q-.49-34-1-68z"
          ></path>
          <path
            fill="url(#linear-gradient-16)"
            d="M473.33 370v85l-172 3V353z"
          ></path>
          <path
            fill="url(#linear-gradient-17)"
            d="M129.33 382l66-12 106 17v85l-52 2v-54z"
            opacity="0.57"
          ></path>
          <path
            fill="url(#linear-gradient-18)"
            d="M249.33 420L249.33 506 -14.67 506 -14.67 404 249.33 420z"
            opacity="0.57"
          ></path>
          <path
            fill="url(#linear-gradient-19)"
            d="M572.33 362v124.2h163q5.49-50.1 11-100.2l71-24v-42z"
          ></path>
          <path
            fill="url(#linear-gradient-20)"
            d="M531.33 409a43.64 43.64 0 0127-11l17 4 12 8z"
          ></path>
          <path
            fill="url(#linear-gradient-21)"
            d="M649.33 438a17.56 17.56 0 0113-12c8.21-1.73 14.31 3.4 15 4a16.53 16.53 0 0112 1 16.18 16.18 0 017 7z"
          ></path>
          <path
            fill="url(#linear-gradient-22)"
            d="M624.33 427h21a5.74 5.74 0 00-4-5 5.91 5.91 0 00-5 1l-6-2-3 3z"
          ></path>
          <path
            fill="url(#linear-gradient-23)"
            d="M269.33 468l7-9 14 2 13-2 20 12z"
          ></path>
          <path
            fill="#fae7bc"
            d="M308.33 413c-1.88.32-15.12 2.53-15 4 .17 2 26 1.29 26 2s-32 1.47-32 3c0 2.16 76 3.76 76 7 0 1.53-17 2.54-17 3 .07.77 48-1.79 48-4 0-1.75-30-1.95-30-4 0-2.47 39.79-2.24 40-6 .26-4.41-54.04-12-96-5z"
            opacity="0.49"
          ></path>
        </g>
        <g data-name="mountains left">
          <g data-name="mountain 3">
            <path
              fill="url(#linear-gradient-24)"
              d="M86.33 247l170-66 76 45h24l77 56 106 35-40 1q47.46 9.25 47 14-.83 8.83-168 2l-340-18z"
            ></path>
            <path
              fill="url(#linear-gradient-25)"
              d="M256.33 181c-85.36 42.64-114.2 59.34-113 62 1.69 3.73 62.1-20.86 66-13 3.22 6.47-34.84 28.75-31 37s42.1-13.66 79 3c13.84 6.25 24.29 16.47 33 25a169.5 169.5 0 0128 36l-272-22 42-63z"
              opacity="0.25"
            ></path>
            <path
              fill="url(#linear-gradient-26)"
              d="M365.33 333c-48.11-49.39-65.25-68.7-64-70 1.87-1.94 43.53 37.19 48 33s-30.05-45.32-27-48c4.26-3.72 75.76 71.78 80 68 2.22-2-17-22.83-13-28 5.22-6.67 46.59 16.11 99 49z"
              opacity="0.29"
            ></path>
            <path
              fill="url(#linear-gradient-27)"
              d="M256.33 181c41.12 38.38 55.74 50.25 57 49 .82-.8-4.27-6.63-3-8 2.88-3.1 33.21 22 35 20 .64-.72-2.33-4.87-13-16z"
              opacity="0.28"
            ></path>
            <path
              fill="url(#linear-gradient-28)"
              d="M356.33 226c37.11 37.51 65 65 66 64 .8-.76-14.25-17.82-13-19 1-.95 10.24 10.77 27 20 9.11 5 17.41 7.34 34 12 15 4.2 31.74 7.93 32 7 .32-1.12-23.21-8.28-23-9 .32-1.07 57.76 15.8 58 15s-47.78-16.18-104-34z"
              opacity="0.21"
            ></path>
          </g>
          <g data-name="maountain 2">
            <path
              fill="url(#linear-gradient-29)"
              d="M.33 201q18.51-20 37-40l71-10 66 19c29.84 16.33 54.67 30.43 73 41 45.54 26.24 68.3 39.36 96 58 40.81 27.46 36.93 29 56 39 56.56 29.52 108 24.35 108 29 0 2.81-18.81 6.61-101 11q68.85 15.5 68 22-1.14 8.92-133 1-49.41 3.58-102 5a2178.11 2178.11 0 01-271-10q16.01-82.5 32-165z"
            ></path>
            <path
              fill="url(#linear-gradient-30)"
              d="M-3.67 222c1.32-6.9 2.69-14.09 4-21q18.51-20 37-40l25 13-32 52 39-7a310.35 310.35 0 01-7 42c-1.45 6-3.76 14.69-1 25 1 3.89 3.25 12.13 9 14 8.21 2.67 16.06-10.34 21-8 4 1.91 5.66 11.34 0 38l90 47-213-11q14.25-72 28-144z"
              opacity="0.45"
            ></path>
            <path
              fill="url(#linear-gradient-31)"
              d="M196.33 374c-10.77-2.41-54.12-12.58-108-62-31-28.41-47.23-53.89-46-55 1.68-1.52 36.45 41.7 52 34 9.17-4.53 3.71-23.32 12-27 15.85-7 56 52.42 61 49 3-2-11.94-22.45-7-28 8.06-9.05 56.58 35.09 128 62 66.69 25.13 125.45 27.11 122 27-22.44-.69-58.44-1.35-103 0-69.48 2.1-81.17 6.68-111 0z"
              opacity="0.45"
            ></path>
            <path
              fill="url(#linear-gradient-32)"
              d="M229.33 248a410.15 410.15 0 0047 34c29.91 19 62 39 108 57 10.42 4.07 19.14 7.07 25 9l53-4c-4.73-1.63-11.66-4-20-7-42.31-15.1-62-23.94-63-22-1.2 2.36 26.64 17.85 26 19-.76 1.38-42.26-17.88-91-47-37.42-22.35-63.94-41.46-65-40-1.21 1.67 32.71 28.09 32 29-1.24 1.61-72.12-51.4-74-49-.88 1.14 14.01 14.26 22 21z"
              opacity="0.45"
            ></path>
            <path
              fill="url(#linear-gradient-33)"
              d="M174.33 170c46.25 32.6 65.91 47.62 65 49-.8 1.23-17.32-9.05-18-8-1.75 2.7 104.34 76.56 107 73 1.49-2-30.75-26.64-29-29 2.37-3.19 61.38 34.5 59 39-.66 1.25-5.7-.78-6 0-.86 2.23 38.53 24.71 87 36 40.4 9.41 69.94 7.73 70 7 .11-1.16-72.87-5.81-110-29-12.76-8-20.37-15.12-53-37-23.42-15.71-41.39-26.7-55-35-27.45-16.75-66.7-39.69-117-66z"
              opacity="0.08"
            ></path>
            <path
              fill="url(#linear-gradient-34)"
              d="M316.33 304c.33-.47 11 6.62 18 11 28.67 17.86 54.57 26.42 78 34 36.31 11.75 57.35 13.72 57 17-.32 3.1-19.38 4-34 3-27.3-1.86-50.45-11.1-50-13 .53-2.23 33.77 4.3 34 3 .21-1.14-25.77-4.33-57-17-23.32-9.47-40.27-20.45-40-21s24.65 12.23 26 10c1.67-2.74-32.58-26.16-32-27z"
              opacity="0.08"
            ></path>
            <path
              fill="url(#linear-gradient-35)"
              d="M117.33 164a266.61 266.61 0 0129 21c18.78 15.76 33.94 33 33 34-1.26 1.33-31.18-26.73-34-24-1.7 1.65 8 13.15 7 14-2.17 1.86-51.88-49.9-49-53 .67-.69 5.1 2.21 14 8z"
              opacity="0.08"
            ></path>
          </g>
          <g data-name="mountain 1">
            <path
              fill="url(#linear-gradient-36)"
              d="M-14.67 211l56 29c17.37 28.26 36.41 44.9 51 55 44.7 30.93 81 23.45 142 51a316.45 316.45 0 0167 41l-113-7-29 9 68 14 22 17q-60 .94-124 5-26.88 1.74-53 4l-111-5z"
            ></path>
            <path
              fill="url(#linear-gradient-37)"
              d="M-11.67 425c-1.76-67.05 1.22-89.42 6-90 6.53-.79 17.17 38.82 20 38s-7.52-35.61-2-38c8.32-3.59 47.42 68.41 52 66 2.26-1.19-7.25-18.6-2-23 4-3.32 12.57 3.93 39 16a286.6 286.6 0 0030 12 238 238 0 0027 7 436.2 436.2 0 0058 8l-144 8z"
              opacity="0.45"
            ></path>
            <path
              fill="url(#linear-gradient-38)"
              d="M81.33 352c15.5 12.27 30.61 18.61 51 27 11.24 4.62 20.67 7.91 27 10l31-9c-5.92-2.87-14.55-7-25-12-51.82-24.66-58.4-27-59-26-1.38 2.37 30.17 22.09 29 24-.94 1.55-22.9-9.36-43-21-23.68-13.71-34.65-22.57-36-21-1.53 1.79 10.1 16.2 25 28z"
              opacity="0.45"
            ></path>
            <path
              fill="url(#linear-gradient-39)"
              d="M.33 234a97.57 97.57 0 0012 23c7.88 10.87 17.84 19 19 18 1.37-1.16-9.57-14.57-8-16 2.31-2.1 28 24.72 30 23 1.79-1.54-16.18-25.55-41-57l-18-11a128.62 128.62 0 006 20z"
              opacity="0.17"
            ></path>
            <path
              fill="url(#linear-gradient-40)"
              d="M41.33 240a163.45 163.45 0 0017 31c6.23 8.9 25.75 36.09 61 52 24.09 10.87 48.74 11.09 49 10 .13-.52-5.2-2.09-5-3 .25-1.13 8.75-.15 10 0 25.13 2.92 55 19 55 19a571.61 571.61 0 0058 27 305.64 305.64 0 00-43-26c-6.84-3.4-31-15.07-66-24-24-6.13-22.14-3.05-38-8a175.92 175.92 0 01-64-36 169.07 169.07 0 01-34-42z"
              opacity="0.08"
            ></path>
            <path
              fill="url(#linear-gradient-41)"
              d="M148.33 347c-.47 1.43 8.61 6.18 17 9 7.93 2.66 15.77 3.79 16 3s-7.22-3.14-7-4c.43-1.63 27.82 4.77 28 4 .15-.6-16.35-5.18-34-9-11.33-2.44-19.59-4.21-20-3z"
              opacity="0.08"
            ></path>
            <path
              fill="url(#linear-gradient-42)"
              d="M81.33 352c.28-.42 10.41 7.09 30 17 15.09 7.63 30.72 15.53 52 21 11.58 3 13.28 2.26 50 10 5.9 1.24 10.76 2.29 14 3l13 10c-23 .09-39.9-.38-40-2s20-3.4 20-6c0-3.47-35.85.12-74-13-39.13-13.46-65.47-39.28-65-40z"
              opacity="0.08"
            ></path>
          </g>
        </g>
        <g>
          <path
            fill="url(#linear-gradient-43)"
            d="M424.33 383.64L286.82 372l-45.49 7.4v1.06l1.06.1v20a1.87 1.87 0 002.12 1.06 1.77 1.77 0 001.05-1.06v-19.71l39.14 3.61v7.75a2 2 0 002.1.89 1.62 1.62 0 001.05-.89v-7.46L388.37 394v15a1.86 1.86 0 002.11 1.06 1.77 1.77 0 001.06-1.06v-15.1l28.56-8v15.85a1.9 1.9 0 002.06.89 1.56 1.56 0 001-.89V385l1.15-.33z"
          ></path>
          <path
            fill="url(#linear-gradient-44)"
            d="M241.33 379.4v1.06l147 13.75h3.17l32.79-9.52v-1.05l-32.79 9.52h-3.17z"
          ></path>
          <path
            fill="url(#linear-gradient-45)"
            d="M259.15 381.22l-1.47-.21q35.81-8.58 35.85-8.38t-33.33 8.59z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-46)"
            d="M267.54 381.85l29.55-9 .84.21-28.93 9z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-47)"
            d="M301.7 373.26l-24.52 9.43 1.47.21 24.1-9.64z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-48)"
            d="M284.52 383.53l22.48-9.85h.83l-22.22 10.06z"
            opacity="0.27"
          ></path>
          <ellipse
            cx="303.38"
            cy="379.23"
            fill="url(#linear-gradient-49)"
            opacity="0.27"
            rx="16.94"
            ry="0.37"
            transform="rotate(-24.26 303.374 379.239)"
          ></ellipse>
          <path
            fill="url(#linear-gradient-50)"
            d="M297.93 385.21c.63-.42 22.43-10.28 22.43-10.28h1.05l-22.22 10.28z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-51)"
            d="M303.38 385.21L324.34 375.14 325.39 375.14 304.22 385.21 303.38 385.21z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-52)"
            d="M309.67 385.83L328.75 375.56 329.79 375.56 310.72 385.83 309.67 385.83z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-53)"
            d="M316.17 386.46L333.78 375.98 334.82 375.98 317.22 386.46 316.17 386.46z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-54)"
            d="M338.39 376.4L321.83 386.88 322.88 386.88 339.44 376.4 338.39 376.4z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-55)"
            d="M341.74 376.61L326.44 387.3 327.91 387.3 342.79 376.61 341.74 376.61z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-56)"
            d="M345.1 377.03L330.63 387.72 331.89 387.72 346.77 377.03 345.1 377.03z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-57)"
            d="M350.55 377.45L335.45 388.14 336.5 388.14 351.18 377.45 350.55 377.45z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-58)"
            d="M354.32 377.66L339.86 388.56 340.9 388.56 354.95 377.66 354.32 377.66z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-59)"
            d="M357.88 378.08L344.05 388.98 345.1 388.98 358.72 378.08 357.88 378.08z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-60)"
            d="M362.08 378.29L347.61 389.4 348.45 389.4 362.91 378.29 362.08 378.29z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-61)"
            d="M365.64 378.71l-13.42 11.11h1c-.21 0 13.21-11.11 13.21-11.11z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-62)"
            d="M370.25 379.13L356.21 390.24 357.25 390.24 371.3 379.13 370.25 379.13z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-63)"
            d="M375.49 379.34L360.4 390.45 361.66 390.45 376.12 379.34 375.49 379.34z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-64)"
            d="M379.89 380c-.21.21-14.25 11.11-14.25 11.11h.84L380.94 380z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-65)"
            d="M384.3 380.18L370.46 391.7 371.72 391.7 385.34 380.18 384.3 380.18z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-66)"
            d="M388.28 380.59l-13 11.32h1.05l13-11.32z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-67)"
            d="M395.82 381.22q-4.17 2.58-8.56 5.56c-2.73 1.86-5.33 3.72-7.79 5.55h1.26l17.82-10.9z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-68)"
            d="M384.5 392.75L406.51 382.06 408.82 382.48 386.39 392.75 384.5 392.75z"
            opacity="0.27"
          ></path>
          <path
            fill="url(#linear-gradient-69)"
            d="M387.86 393.17q7.71-2.4 15.77-5.19 7.22-2.49 14-5.08l1.67.21-30.18 10.06z"
            opacity="0.27"
          ></path>
        </g>
        <g>
          <path
            fill="url(#linear-gradient-70)"
            d="M296.33 404l12 13a99.08 99.08 0 0019 5c16.77 2.67 30.34.37 38-1a129.45 129.45 0 0013-3c.67-.65 1.34-1.32 2-2a101.51 101.51 0 0010-12l-21-8z"
          ></path>
          <path
            fill="url(#linear-gradient-71)"
            d="M296.33 404a112.3 112.3 0 0021 7c31.63 7.15 58.86-1.28 73-7l-21-8z"
          ></path>
          <path
            fill="url(#linear-gradient-72)"
            d="M300.33 405a128.5 128.5 0 0017 5 125.67 125.67 0 0030 3 115.21 115.21 0 0041-9l-19-7-43 5z"
          ></path>
          <path
            fill="url(#linear-gradient-73)"
            d="M318.33 404l9 8h9l-10-10-8 1z"
          ></path>
          <path
            fill="url(#linear-gradient-74)"
            d="M343.33 401l14 11 9-1-16-11h-7z"
          ></path>
          <path
            fill="url(#linear-gradient-75)"
            d="M318.33 403l10 9 10 1-12-11z"
          ></path>
          <ellipse
            cx="354.83"
            cy="405.5"
            fill="url(#linear-gradient-76)"
            rx="3.91"
            ry="14.2"
            transform="rotate(-56.36 354.809 405.49)"
          ></ellipse>
          <path
            fill="url(#linear-gradient-77)"
            d="M346.33 400q6.51 14 13 28c-.33 1.67-.66 3.33-1 5l8 10 3-2-4-12-4-2-14-28h-1z"
          ></path>
          <path
            fill="url(#linear-gradient-78)"
            d="M346.33 399l14 29-1 5q3.51 5 7 10l4-2-4-12-4-2-14-28z"
          ></path>
          <path
            fill="#606060"
            d="M351.33 413a2.73 2.73 0 011-2 2.55 2.55 0 013 0 2.65 2.65 0 011 2h1a3.55 3.55 0 00-1-2 3.73 3.73 0 00-3-1 3.54 3.54 0 00-3 3z"
          ></path>
        </g>
        <g data-name="mountain 1">
          <path
            fill="url(#linear-gradient-79)"
            d="M1076.33 95l-96 32c-14.53 10-30.19 20.06-47 30a818.32 818.32 0 01-81 42 279.38 279.38 0 00-99 51l-47 13-113 70 35 3-58 27 228-4a110.45 110.45 0 01-25 7c-9.38 1.44-14.85 1-20 5-5.46 4.28-7.29 11.07-8 16l191-6-44 42 189-9q-2.49-159.49-5-319z"
          ></path>
          <path
            fill="url(#linear-gradient-80)"
            d="M746.33 386c0-.16 34.39 4.11 68-14 19.28-10.39 21.31-18.85 41-31 28-17.26 53.87-17.92 66-20 29.71-5.09 69.81-34.63 114-144-3.32 13.61-9.32 38.1-17 69-16.18 65.16-20.89 82.71-36 101-15.24 18.45-33.5 28.51-46 34l-18 18c7.69 2.54 29.69 8.66 53-1 18.88-7.83 28.31-22.05 37-34 20.57-28.27 24.24-57.78 25-72 7.81 25.28 12.31 30.33 15 30 7.26-.9 5-41.24 13-97a600 600 0 0116-76l2 137c.65 42.48 1.32 85.52 2 128l-189 9 44-42c-148.71 4.17-189.99 5.18-190 5z"
            opacity="0.45"
          ></path>
          <path
            fill="url(#linear-gradient-81)"
            d="M572.33 362c71.35-22.35 103.5-31.49 104-30s-26.49 11.64-26 13c.63 1.71 44.46-12.64 69-21 11.11-3.78 16.66-5.67 23-8 48.7-17.88 78.52-35.48 80-33s-29.64 22.17-28 25c1.35 2.33 24.52-7.61 45-19 19.71-11 46.89-28.81 76-58-9.68 46.4-26.66 63.87-41 71-7.43 3.7-18.48 7.47-32 18a81 81 0 00-22 27l-22 12z"
            opacity="0.32"
          ></path>
          <path
            fill="url(#linear-gradient-82)"
            d="M993.33 151a200 200 0 00-69 83c20.8-27.68 34.75-44.47 37-43 1.87 1.22-5.13 14.37-4 15s11.67-14.71 36-55z"
            opacity="0.3"
          ></path>
          <path
            fill="#10254f"
            d="M594.33 332c3.4-.42 7.84-1 13-2 0 0 10.85-2 21-5 18.5-5.44 27-13.87 44-21a122.11 122.11 0 0138-9 371.68 371.68 0 00-52 23c-11 5.91-21 12-30 18z"
            opacity="0.32"
          ></path>
          <path
            fill="#10254f"
            d="M882.33 383l54-2a113 113 0 0022-12 110.73 110.73 0 0025-24 107.73 107.73 0 0014-25 271.602 271.602 0 01-19 18c-16.09 13.85-36.79 28.41-39 26s16.41-20.07 14-23-22.48 8-71 42zM777.33 359h21l22-12a92.13 92.13 0 0111-16 93.86 93.86 0 0132-24c-17.08 5.44-28.56 13-36 19-9.51 7.72-18.19 17.7-19 17s7.16-9.77 6-11-11.47 5.84-37 27z"
            opacity="0.74"
          ></path>
          <path
            fill="url(#linear-gradient-83)"
            d="M648.33 299l57-27 49-11c15-11.15 31.69-22.61 50-34s36.24-21.4 53-30a308.34 308.34 0 00-105 53l-46 13z"
            opacity="0.44"
          ></path>
          <path
            fill="url(#linear-gradient-84)"
            d="M896.33 178c17.27-9 35.38-19.23 54-31q15.79-10 30-20c56.34-19.57 96.89-32.35 96-32-54.18 21.22-76.62 31.21-76 33 .77 2.18 35.33-8.91 36-7 .85 2.41-52.84 23.9-140 57z"
            opacity="0.26"
          ></path>
          <path
            fill="url(#linear-gradient-85)"
            d="M576.33 360q10.33-5 21-10 15.7-7.32 31-14c5.5-3.61 13.33-8.57 23-14 9.46-5.32 27.94-15.17 59-27 28.14-10.71 56.56-19.22 57-18 .32.88-13.88 6.37-51 23-34.6 15.5-37.21 17.42-37 18 .86 2.35 49.72-13.87 50-13s-42.92 15.56-92 33c-25.9 9.21-47.06 16.9-61 22z"
            opacity="0.31"
          ></path>
          <path
            fill="url(#linear-gradient-86)"
            d="M856.61 209.84c9.25-5.49 19.07-10.17 19.59-10.41 4.18-2 6.14-2.79 12.92-5.94 3.63-1.69 8.25-3.9 14.77-7.17 22-11 34.18-17.61 34.47-17.1.54.92-40.73 24-39.15 27.26 1.29 2.63 30.33-9.91 30.73-9 .77 1.82-100.05 49.26-102.65 44.29-1.19-2.28 18.58-15.56 29.32-21.93z"
            opacity="0.13"
          ></path>
        </g>
      </g>
      <g>
        <path
          fill="url(#linear-gradient-87)"
          d="M-14.67 505l28-15 39 7 35 6 57 42 101 18 127 54-394 15q3.51-63.5 7-127z"
        ></path>
        <path
          fill="url(#linear-gradient-88)"
          d="M13.33 490q21.62 8.24 45 16 11.13 3.67 22 7l64 32-57-42z"
          opacity="0.08"
        ></path>
        <path
          fill="url(#linear-gradient-89)"
          d="M169.33 549l70 20 93 31-87-37z"
          opacity="0.08"
        ></path>
        <path
          fill="url(#linear-gradient-90)"
          d="M542.33 647l51-32a523.65 523.65 0 00146-49l106-65 103-13a380.91 380.91 0 01159-81l3 63 9 176z"
        ></path>
        <path
          fill="url(#linear-gradient-91)"
          d="M700.33 584l65-11 80-72-100 61z"
          opacity="0.08"
        ></path>
        <path
          fill="url(#linear-gradient-92)"
          d="M888.33 496l67 2q22.09-16.92 46-34 34.71-24.74 68-46a414.41 414.41 0 00-117 66z"
          opacity="0.08"
        ></path>
      </g>
    </svg>
  );
};

export default DayAnimation;
