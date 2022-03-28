<template>
  <header>
    <p v-html="content"></p>
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      width="199.0099"
      height="200.99004"
      viewBox="0 0 52.654703 53.178613"
      version="1.1"
      id="svg8"
      inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
      sodipodi:docname="logo.svg"
    >
      <defs id="defs2" />
      <sodipodi:namedview
        id="base"
        pagecolor="#ffffff"
        bordercolor="#666666"
        borderopacity="1.0"
        inkscape:pageopacity="0.0"
        inkscape:pageshadow="2"
        inkscape:zoom="1"
        inkscape:cx="74.257716"
        inkscape:cy="102.99092"
        inkscape:document-units="px"
        inkscape:current-layer="layer1"
        showgrid="false"
        inkscape:showpageshadow="true"
        showborder="false"
        units="px"
        showguides="true"
        inkscape:guide-bbox="true"
        inkscape:window-width="3840"
        inkscape:window-height="2111"
        inkscape:window-x="0"
        inkscape:window-y="25"
        inkscape:window-maximized="1"
        fit-margin-top="0"
        fit-margin-left="0"
        fit-margin-right="0"
        fit-margin-bottom="0"
      >
        <sodipodi:guide
          position="-35.627062,-1.4047589e-05"
          orientation="0,1"
          id="guide12"
          inkscape:locked="false"
        />
        <sodipodi:guide
          position="5.7540893e-10,96.140662"
          orientation="1,0"
          id="guide14"
          inkscape:locked="false"
        />
        <sodipodi:guide
          position="52.654703,376.17985"
          orientation="1,0"
          id="guide16"
          inkscape:locked="false"
        />
        <sodipodi:guide
          position="20.171205,53.178616"
          orientation="0,1"
          id="guide18"
          inkscape:locked="false"
        />
        <sodipodi:guide
          position="2.7626538,36.352611"
          orientation="1,0"
          id="guide3739"
          inkscape:locked="false"
        />
        <sodipodi:guide
          position="49.858984,30.471358"
          orientation="1,0"
          id="guide3741"
          inkscape:locked="false"
        />
      </sodipodi:namedview>
      <metadata id="metadata5">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(0.2619637,-243.82138)"
      >
        <rect
          id="rect10"
          width="52.654701"
          height="53.178612"
          x="-0.2619637"
          y="243.82138"
          style="stroke-width: 0.06268274"
        />
        <path
          inkscape:connector-curvature="0"
          id="path28"
          d="m 2.5460937,256.47979 v 25.71535 h 3.3758928 v -22.58059 l 6.6312175,17.63732 h 3.49646 l 6.631218,-17.63732 v 22.58059 h 3.393117 v -25.71535 h -5.184407 l -6.59677,17.49953 -6.5623219,-17.49953 z m 30.4347043,0 v 25.71535 h 3.479237 v -10.33437 h 4.374882 c 2.882141,0 5.058098,-0.64877 6.527874,-1.9463 1.48126,-1.29754 2.221889,-3.21514 2.221889,-5.7528 0,-2.5147 -0.740629,-4.42081 -2.221889,-5.71835 -1.469776,-1.30902 -3.645733,-1.96353 -6.527874,-1.96353 z m 3.479237,2.85918 h 4.374882 c 1.619052,0 2.870658,0.41911 3.754819,1.25734 0.884163,0.83824 1.326245,2.02669 1.326245,3.56536 0,1.55016 -0.442082,2.74435 -1.326245,3.58258 -0.884161,0.83823 -2.135767,1.25735 -3.754819,1.25735 h -4.374882 z"
          style="
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 1.25;
            font-family: sans-serif;
            letter-spacing: 0px;
            word-spacing: 0px;
            fill: #ffffff;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 0.88186586;
          "
        />
        <path
          style="
            fill: none;
            stroke: #ffffff;
            stroke-width: 0.92604166;
            stroke-linecap: round;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="M 2.5172213,283.87851 H 49.613553"
          id="path3745"
          inkscape:connector-curvature="0"
        />
      </g>
    </svg>
  </header>
</template>

<script>
export default {
  name: "InvoiceHeader",
  data() {
    return {
      content: process.env.VUE_APP_HEADER_CONTENT,
    };
  },
};
</script>