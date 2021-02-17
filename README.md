# GEOM99
## Checklist items for Geom99 are located in this repository
## Week 2
**New empty Layer REST URL:** https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/tree_database1/FeatureServer
**ID URL:**1d51535cbce74bf583164d7a20c32fe1

****

## Week 1
### **Option 1:** https://mattarchbell.github.io/GEOM99/option1.html
**Shark Spotters Map link:** https://mattarchbell.github.io/GEOM99/sharkspotters.html

**Hello World link:** https://mattarchbell.github.io/GEOM99/helloworld.html

**Tutorial 1:** https://mattarchbell.github.io/GEOM99/Gmaps/tutorial1.html

**Tutorial 2:** https://mattarchbell.github.io/GEOM99/Gmaps/tutorial2.html

**Tutorial 3a:** https://mattarchbell.github.io/GEOM99/Gmaps/tutorial3a.html

**Tutorial 3b:** https://mattarchbell.github.io/GEOM99/Gmaps/tutorial3b.html

**Tutorial 3c:** https://mattarchbell.github.io/GEOM99/Gmaps/tutorial3c.html

**Places API link:** https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJd_lJIxGaiVQRj0b0YMdZnws&fields=name,rating,formatted_phone_number,price_level,opening_hours&key=AIzaSyA5a1FoKmbmQ1djPh6pRx7oiknBf3ACNOE

JSON Return:
```JSON
{
   "html_attributions" : [],
   "result" : {
      "formatted_phone_number" : "(888) 720-3414",
      "name" : "Tourism Tofino",
      "obfuscated_type" : [],
      "opening_hours" : {
         "open_now" : true,
         "periods" : [
            {
               "close" : {
                  "day" : 0,
                  "time" : "1700"
               },
               "open" : {
                  "day" : 0,
                  "time" : "1000"
               }
            },
            {
               "close" : {
                  "day" : 1,
                  "time" : "1700"
               },
               "open" : {
                  "day" : 1,
                  "time" : "1000"
               }
            },
            {
               "close" : {
                  "day" : 2,
                  "time" : "1700"
               },
               "open" : {
                  "day" : 2,
                  "time" : "1000"
               }
            },
            {
               "close" : {
                  "day" : 3,
                  "time" : "1700"
               },
               "open" : {
                  "day" : 3,
                  "time" : "1000"
               }
            },
            {
               "close" : {
                  "day" : 4,
                  "time" : "1700"
               },
               "open" : {
                  "day" : 4,
                  "time" : "1000"
               }
            },
            {
               "close" : {
                  "day" : 5,
                  "time" : "1700"
               },
               "open" : {
                  "day" : 5,
                  "time" : "1000"
               }
            },
            {
               "close" : {
                  "day" : 6,
                  "time" : "1700"
               },
               "open" : {
                  "day" : 6,
                  "time" : "1000"
               }
            }
         ],
         "weekday_text" : [
            "Monday: 10:00 AM – 5:00 PM",
            "Tuesday: 10:00 AM – 5:00 PM",
            "Wednesday: 10:00 AM – 5:00 PM",
            "Thursday: 10:00 AM – 5:00 PM",
            "Friday: 10:00 AM – 5:00 PM",
            "Saturday: 10:00 AM – 5:00 PM",
            "Sunday: 10:00 AM – 5:00 PM"
         ]
      },
      "rating" : 4.5
   },
   "status" : "OK"
}
```

**Directions API link:** https://maps.googleapis.com/maps/api/directions/json?origin=Lindsay-Ontario&destination=Calgary&key=AIzaSyA5a1FoKmbmQ1djPh6pRx7oiknBf3ACNOE

JSON Return:
```JSON

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJmy7QzkN51YkRCN4Ff03qIbQ",
         "types" : [ "political", "sublocality", "sublocality_level_1" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ1T-EnwNwcVMROrZStrE7bSY",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 51.0479505,
               "lng" : -78.7408959
            },
            "southwest" : {
               "lat" : 44.3568752,
               "lng" : -114.0718702
            }
         },
         "copyrights" : "Map data ©2021 Google, INEGI",
         "legs" : [
            {
               "distance" : {
                  "text" : "3,195 km",
                  "value" : 3195358
               },
               "duration" : {
                  "text" : "1 day 9 hours",
                  "value" : 119536
               },
               "end_address" : "Calgary, AB, Canada",
               "end_location" : {
                  "lat" : 51.0448403,
                  "lng" : -114.0718702
               },
               "start_address" : "Lindsay, Kawartha Lakes, ON, Canada",
               "start_location" : {
                  "lat" : 44.3568752,
                  "lng" : -78.7408959
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "88 m",
                        "value" : 88
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 44.3566226,
                        "lng" : -78.7419453
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eWellington St\u003c/b\u003e toward \u003cb\u003eVictoria Ave N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "omvmGrar_NP`A`@nC"
                     },
                     "start_location" : {
                        "lat" : 44.3568752,
                        "lng" : -78.7408959
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1460
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 133
                     },
                     "end_location" : {
                        "lat" : 44.3690888,
                        "lng" : -78.74769599999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eVictoria Ave N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{kvmGdhr_NoBr@cCz@iBn@KByBt@uCdAaCz@oBt@eC|@mBn@}Bv@sBx@sCdAiBn@}@ZcA^gC|@eDjAiDnAkC~@gC~@"
                     },
                     "start_location" : {
                        "lat" : 44.3566226,
                        "lng" : -78.7419453
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 919
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 44.3686075,
                        "lng" : -78.75911809999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOrchard Park Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yyxmGbls_N@VDbAJvBRrE@PNrCP`FDj@DpAJjBBj@BT@t@?jAApBAjBP|FDbB@l@Cx@CVGVQd@I`@CZAZ?T@ZJbC"
                     },
                     "start_location" : {
                        "lat" : 44.3690888,
                        "lng" : -78.74769599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2282
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 133
                     },
                     "end_location" : {
                        "lat" : 44.3749468,
                        "lng" : -78.778842
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAngeline St N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 4\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Kawartha Lakes County Rd 4\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yvxmGnsu_NoG~BiBp@c@P}@ZeA^yCdAiC~@eHhCcA^_IxCaAt@i@p@c@l@m@hAUh@IZU|@O`AMdAKjBAbAC~@~A~MBNPnAHn@Hn@R`Bh@~DHn@RzA?BT~AJn@t@nFHn@`A~GR~A`@nCHn@j@~Dh@~D"
                     },
                     "start_location" : {
                        "lat" : 44.3686075,
                        "lng" : -78.75911809999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.5 km",
                        "value" : 3453
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 155
                     },
                     "end_location" : {
                        "lat" : 44.4034292,
                        "lng" : -78.79377839999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eON-35 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "m~ymGvny_NAX?@?LBT@R@T?J?L?P?D?DAJCHELELGHEFGFEDIDKFOHA@KT_AZsBr@wCbAiCz@a@NmExAu@Vq@TgHdCqBr@a@NcEtAoBr@eJ|Cu@Va@NwJfDaEtA_Bj@iBp@eA\\wEbBm@TWLYLYP[NOJC@_@TUNURi@d@ONyArAk@h@aAz@q@f@m@^QLGDKFOHMFYPSJIDIDWJmAh@qChAeBr@g@R}@\\gE`B{@^{An@C@yB|@oCfAmAd@s@Z}@\\iAd@WJm@RGBQDYF]HSDWDC?]DQBS@O@I@M@Q?U?W?wAC"
                     },
                     "start_location" : {
                        "lat" : 44.3749468,
                        "lng" : -78.778842
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.0 km",
                        "value" : 10985
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 459
                     },
                     "end_location" : {
                        "lat" : 44.496853,
                        "lng" : -78.83795750000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eKillarney Bay Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 21\u003c/b\u003e (signs for \u003cb\u003eCounty Road 21\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKillarney Bay Road\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mp_nGbl|_NEh@YlAkCnAmIxCoFnBo~@n\\mFnBsHnCqHlCyK~D]LgA^c@NkEzAiC|@eQdGMDwAf@cA^gBl@a@NeA`@gCx@{HjCgFfBqGzBa@NwJhDqGzB_GpBs@XcA^cA^a@Nc@NkE~AmBr@sAd@uIxCcA^a@NwJhDc@NoG|Ba@LiC~@a@LoAd@{Bx@a@NoBr@cA^a@NiC|@cA\\sHlCa@LqG|Ba@NcA\\a@NkDlAmFjBwJjDmDnAkEvAa@Na@L}CdAkIrC{@Xa@Na@LeHdC_LtDkLfEcA\\cA^qHnCa@NwAh@qHrCsBx@a@NuFxB}Al@a@PeBp@iDrAkFtBa@NkFvBa@NcA`@eBp@iDtAkFtBeBr@w@XqBx@qChAw@ZiDtAkIhDEBgC`AQFe@PoAd@a@Nk@T{B`Aa@PMFwAh@iDpAcA^kE`BeBp@"
                     },
                     "start_location" : {
                        "lat" : 44.4034292,
                        "lng" : -78.79377839999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "18.1 km",
                        "value" : 18078
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 767
                     },
                     "end_location" : {
                        "lat" : 44.4414335,
                        "lng" : -79.0490854
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGlenarm Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 8\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ixqnGf`e`Nf@rC`@fCJn@T|AJn@Jn@Jn@D\\P`AJl@V~AJl@Jn@p@|DF\\BNLn@Nn@Nh@Nh@@@Vn@b@fA@@Vd@l@lAVd@NV~AjD^fADLJVVfAVvAJh@?Bp@|DtAjIJn@V|AfAzGtCvPJn@t@hEr@`F`@nCT~AT~ABP`AjGl@~DJn@rBzMb@nCHn@V|A`@nCn@bEd@lCJl@Jn@V~Ap@zDV~AzA`J|@rEJl@\\`Bb@pALZZr@Vf@Rb@@@Tf@rBzEt@fCj@lCjApHJl@rAhIp@fC@@Rf@J\\p@nAbDhFz@tAj@~@^j@Xb@~BnDdBlCXb@t@hAR`@b@v@n@jBPf@?BLl@b@lBZzBHp@hAnIR`BT~AHn@^nCHn@r@pFJn@v@dGVhEDlNB`@RrCrAbKJn@Hn@Hn@fCpRHp@T~Aj@nEd@fDHn@`A~GHn@XvB@XBp@FdB?`B@v@c@dHEp@En@Cj@G`CB~DLdBfDbWHn@@Hv@xQNtATtB\\bCpAlIJv@r@fFHn@lFp`@`@pCnFr\\~@`GP`Ar@zDz@bC@@r@xAj@z@r@dAX`@r@dAXb@X`@r@fAX`@Xb@RXlAvBVb@R\\Vp@Rh@@Bb@hBRhALn@Lt@jAfIJj@xDxVHn@jArHtA~Il@hDr@zDV|AzAnIRxAlC~QN|@Jn@d@zCvBnO~BvO\\fBThA@D\\rA?@zEfOLj@ZzAbA~GdA|GJn@T~Al@|DJn@j@zD~@fGx@lFdA|Gl@zDNdAHr@FbA?FBf@B`A@d@EnE?f@Ax@CvD?vABn@Bh@BZDXXxBjDbTJn@x@hFn@`EtAvJ^hCdBvLt@lF\\nCtAlNHd@Jt@`@nCl@~DxA|Jt@hFVdBj@vDN`AHn@b@jC\\zBBRFZx@lFZpBN~@dA|GxAnJBLLl@n@jDDNn@hDf@dCBVF\\j@dDv@dFz@jFz@dF@Fl@xDdA|GrArIvApJhBnNHn@Hj@b@pCXfBh@`CDP~@jC|AjDBDP`@pDdIHPBHTr@Ph@FTZbBJl@^|Ch@hE"
                     },
                     "start_location" : {
                        "lat" : 44.496853,
                        "lng" : -78.83795750000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.1 km",
                        "value" : 6108
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 302
                     },
                     "end_location" : {
                        "lat" : 44.4252487,
                        "lng" : -79.12259709999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSimcoe St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDurham Regional Rd 15\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}}fnGxgnaNr@nFFh@T~AHn@Jr@f@zD@DHj@R~A@BFj@j@~D?DHh@h@`EHn@Fd@@HJn@R~AT~AHn@h@`EHn@Hn@BNPnA^nCHp@R~AJn@rA`KHn@BNxA~KJp@@NF^r@nFNjADRD`@BLR`BLv@BVBNHn@VnBPnAJn@Hn@PpAN|@R~AJn@T~ArBfOLx@R~At@nFjAnIHf@@FHn@j@~DR|A@@R~A`@nC^nCHl@vC`Tx@`GLz@^nCxAlKF`@jAnIvA~JpAfJBPN`A~@fHRbBRxA@Df@zDhB|M`@vCr@jFdBlMb@bDh@~DL`Ad@lD^pCfAvIPxAR`BR|A?@XrB^xC`@dDHt@Ff@T~Ah@bEL`ALfAhAvIb@fDNfAb@bD`@zC"
                     },
                     "start_location" : {
                        "lat" : 44.4414335,
                        "lng" : -79.0490854
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "34.4 km",
                        "value" : 34427
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1583
                     },
                     "end_location" : {
                        "lat" : 44.6062617,
                        "lng" : -79.38747529999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-12 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yxcnGfs|aN_CbAcCbAkAf@OFkCdA_Cz@cCz@aCz@kA`@o@TSFa@NaEvAa@NaA\\}@ZeCz@aCx@y@XmExA}@XeIpCw@X}NbFC@MDqXlJi@PcCx@gBn@oEtAa@LaLpDwO`F{DnAa@LmFbBgBj@i@Po@PyBt@cEtAmDlAiDjAeA^gBr@m@Ri@R]LuFnBaIlC}Ab@eEpAeA\\qAb@oC`A{@X}CfAKBUHKDw@XqGxBIBa@NqAb@aH`C]LoEzAgCz@oAb@y@XuHdCKBcA\\c@NaCx@aLtDmLxDWH[JcCx@mA`@QDo@T}E`B_Bj@wAd@e@NiBp@y@b@[RIDe@Z_@Xa@ZoB`B_BpA[V_@VcAz@wAjAw@p@eBxAmB~AaBtAcCpBaCnBy@p@o@f@q@h@WP_@Za@\\SP[T]Ry@d@q@Xa@PUHa@L]JSD]Ha@Fi@Fo@D_@Bk@?Y?cAC}AIOAqAKsCQgCQyCQaDSC?q@EoBEa@?m@B[Bo@LWDOD_@H{@ZOFoBp@c@NcA^a@LUHsBr@SFMFsItCuAf@eA\\wBt@c@Ne@NkDjAaBl@qAb@}Ah@aBj@k@RqE|AoBp@IDeA^s@TwAf@aCv@_Cz@IBa@Lm@TcA\\UJqC`Ai@PiCz@iBl@a@LcA\\cA\\cO`Fa@NiCz@qGvBoC`AiCz@_KnD{OtFkTvHyKzDcDjA_Bj@yEbBgExAaExAUHkE~AyCbA}Af@yFlBsHbC_IjCyFnBwBt@iFdBiAb@]LyHnCyAh@uI|CWHyFpBiC|@YL{HlCa@NeL`EuHfCa@NsBr@qMjEc@N]LmKlDQFwJfDIB{@XcAZgBl@a@Li@P_A\\]L[Lq@\\i@\\YTa@\\c@h@_BbC_BrCm@dAi@bAgC~EiAvBsGhM[p@qB`Eo@nAk@jA}AxC_DnGgAvB{AtCWd@m@jAkCdFo@lAeArB}AtC_BvCg@~@[n@{ApCuAjCGLoFtKqAhC_CxEsCtFsE|IsBzDsExIqEvIuKrSKTsHrNiElIWd@m@jA{DrHEJmJzQUf@eApBKRgBlDeArBsB~DeArBaDlGoAbCqAdCmCdFWd@Q\\EFk@lAUf@OZUj@CHQh@I`@Oj@Mz@Ix@KdAAVEp@Ep@MbBCh@SzCStCEn@YlESlCEv@M|AEp@e@hHEn@?@s@xIMbBGn@AVCX_@bEEb@ALi@tFGp@ANMpAGp@_@hE_@~DGn@e@nF]pDIjAGn@UtCI`ASzCCXUrCC`@AN[vD]hEIdAIdA_@rEi@rHUvCEp@e@bGCd@Gn@SxCWpDMfB[zDMfBMbBC^Er@CZCx@?DAf@A^Af@?H?t@@r@?D?J@V@^@Z?DDl@?BDp@?@Fl@H~@Bb@Fp@@RR~BFn@HbA`@~Ej@nH\\bEf@jGXpDL`BDp@Ft@b@pFL|ATxCFp@Dp@BPP`CZtDl@vHFp@@Np@dIFr@d@pF?DFp@f@hGB\\Fp@Dn@h@hGJnAPzBBVRfC`@pE?BDl@JjAR|BNhBBXR`C^fENlBD\\Fp@LbBHt@LtAb@hFFp@VxCTlCFp@@JTfCL`BD`@@Nb@hF@JZbD^nEHdANbBH|@RfCNzAb@pF@Jn@rHDd@PjBFbABh@Bd@Bj@@n@@z@?B@fADlF@f@?p@BtA@bB?N@p@@vC@p@?FDfH@v@?~A@tA?L@xE@`BDvPBpE@zE?fC@^?|B?pB?~@@rG@|G?n@@pHBlH@|F?p@@vC?p@@vC?p@@vC?bB@zF?h@Al@Ad@CX?NK~@QdAQ|@Kh@o@rC{AzGkChMuAdGq@zCa@fBYlAcBrHa@rBUvAMz@G\\It@KbAOzA]lDO`BCVYfEg@hHQrCStCGdAM|AEj@CTANE\\Gh@If@Id@Kf@UhAWrA[|AGZ[|Ai@jCMl@k@rCORADCDQz@s@tDE`@AFCHCNI^Kf@ETIb@g@hCCNOx@Kr@Gd@KjB?n@?`@?x@BzABpADbC@x@?d@@P@^?d@FzDBd@FvCDvBBpBFpG"
                     },
                     "start_location" : {
                        "lat" : 44.4252487,
                        "lng" : -79.12259709999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.0 km",
                        "value" : 4962
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 336
                     },
                     "end_location" : {
                        "lat" : 44.590913,
                        "lng" : -79.4421206
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-12 N\u003c/b\u003e (signs for \u003cb\u003eON-11\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Trans-Canada Hwy\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cdgoGvjpcNXB^DLBNFLFLFRHfAn@~ClBh@\\nBlAzAbArAfAh@h@f@d@p@t@d@j@^f@f@p@b@p@r@dAv@rAp@hAdBvCn@bAj@~@pDbGdGxJz@vAp@jAn@fAFJh@`AN\\LRTd@DJHPLZJTJXVv@r@|Bt@dCFPPt@Nj@H`@P|@Hb@XxARnA?DHd@F`@Fh@Ht@JhAJ`AJvAF|@Fz@Dx@FpA?@LjCHvANxCPvC`ArRbAdSL|BHbBDp@XvFDp@JbBBp@NtCJbBBp@HrA@N@V?BLjCHxAHxAHbBBp@HhBD`@Z|GD|@b@pHVxEHxBDxABvABnB?j@BjBLhQFdFHlM?LD|DBhBDbAHbAB`@Fv@@TN|AFf@^xB"
                     },
                     "start_location" : {
                        "lat" : 44.6062617,
                        "lng" : -79.38747529999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 486
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 44.5926911,
                        "lng" : -79.446519
                     },
                     "html_instructions" : "Take the \u003cb\u003eON-12 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOntario 11 N\u003c/b\u003e ramp to \u003cb\u003eGravenhurst\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMidland\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "eddoGf`{cN?l@?@@HBNR`B?@D\\F`@Db@@\\@V@X?XA\\A^KlAMd@Of@M\\O\\OZMRQTQROL]XULKDMFODQDSDm@Jg@HQBA@A@IN"
                     },
                     "start_location" : {
                        "lat" : 44.590913,
                        "lng" : -79.4421206
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1598
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 55
                     },
                     "end_location" : {
                        "lat" : 44.6069428,
                        "lng" : -79.4457903
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-11 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-12 N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iodoGv{{cNuCRc@B}CTkAJmCRaHj@sAL}AJO@yBJq@@qA@oACq@Ay@CaBImAKiAM}AS}QqC{@MmC_@qEu@"
                     },
                     "start_location" : {
                        "lat" : 44.5926911,
                        "lng" : -79.446519
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 447
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 44.6102969,
                        "lng" : -79.44312959999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e133\u003c/b\u003e for \u003cb\u003eColdwater Road W\u003c/b\u003e toward \u003cb\u003eON-12 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMidland\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "khgoGdw{cNMOAACAeAWgAUm@OYGMEQIMIIGIIQWU_@aAoBGKi@eAWe@Wa@ACACEGECMIiCm@"
                     },
                     "start_location" : {
                        "lat" : 44.6069428,
                        "lng" : -79.4457903
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "21.5 km",
                        "value" : 21455
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 1042
                     },
                     "end_location" : {
                        "lat" : 44.7076335,
                        "lng" : -79.6574892
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-12 N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "k}goGpf{cN_@xEW`D?@W`D_@zEIpA]~ESzBCRIdAIbAGz@UfC[fEUbDUnCEb@c@~FKdCEbAEnACt@ChACh@K`EMxDW~IQvFGhCEnACrAEdBCx@Cx@An@?ZAh@?h@Ap@?`A?T?bB?zFArB?BAnB?b@C`BCt@GdEEdCGpDCbBEhBMfGE|@InBKfBGfAYxFUfEUjEWtFIxAEz@KbBW~EE~@KhBInBIbBGlAI~BKzBKlBKlBk@fKc@`IEp@Cp@MpCG|BCnA?BCjDEbDCpBAp@?HIfBIdBE`@Gr@KdAKx@Ip@CLUtAYzA_@~A_@vASr@ELg@|A]fAs@zBa@vAe@bBYjAo@lCy@tDABaAnEu@hDKf@Mf@g@dBUp@KZMXQb@i@jAIRc@x@[d@_@h@_@f@_@b@IHWXWX]\\]Xy@p@iAlAe@^A@q@j@w@n@aBrAs@j@CBm@h@WT_@^SRUTGHUVc@h@OTk@t@[b@a@r@e@z@u@xAi@lAe@pA]bAWx@YdAEL_AxDOh@Ol@YhA[nAKb@Oh@Oh@Od@A?[`AOb@O^Yr@]n@qCzFGJcAtBm@lA{AzCgFlKEFgBtDm@lAc@~@Q\\_CbFu@~A}@tBi@lA{AfD}@nB]t@c@`Ao@rAmDxHYl@}@nBa@|@u@`B[p@Wl@q@`Bw@pB}@fCoAzDM`@w@fCABq@jBi@zAMZq@dB_C`GCDmAnC}@nBcC|F_@x@Q^y@hBy@lBa@`Ai@lAm@lAWf@OXq@fAOR]`@a@d@c@b@_@\\w@r@aBrAsD|CyD`D]ZsFtEyCdC{BlBsEtDg@`@yBhByBjBqHhGoB`BmA`AoIbH{BhB{CfCmB|AwAlAeP`NoJ~HoAdAqBfBu@t@e@h@i@j@uCvDy@tAa@t@c@v@}CpGi@bAEFaCfFsBlEeArB{AzCqCxFiFlK_@t@i@hAoB|Di@dA[v@m@vAa@pA]lAOl@Qt@Mr@GXQlAObAMlAIlAGx@EjAMxGAp@WjPElCAz@WvNAvBIrSAhBAfCCbG?p@AdBAvCAbB?dBAbBA|BCpDCp@Cp@GbB?DGj@KhACVQ`BS`By@bHiBvOQ`Bg@bEi@tEOdAOjAOz@Qx@On@?Dk@tBOp@]vAw@pC_@xAy@tCK\\]tA{AvFMf@}@hDABW~@U|@W~@Of@Wt@GRKTCHUd@c@x@_@l@k@v@e@h@]ZCDYTOJOJOJOHYPEBa@Pa@PMFSHa@NoC`A}Al@a@Na@La@NoDpAe@Re@PSJm@Xm@\\c@XYP{@l@QNUPk@d@_Ax@k@f@sIvHoD|CiB~AiAbAaGfF}ClCoGrFsExD[X_@\\uEzD_BtAc@^MJkAhAw@z@c@h@cAvAo@bAcA~Ag@hAmAjCaErIoBdEeCjFc@~@u@|A}CrGEH_O`[KPeOj[yA|CyA`D"
                     },
                     "start_location" : {
                        "lat" : 44.6102969,
                        "lng" : -79.44312959999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 113
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 44.7068444,
                        "lng" : -79.6583804
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eON-12\u003c/b\u003e (signs for \u003cb\u003eON-400\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Road 23\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "u}zoGhbeeNz@dA`BjB"
                     },
                     "start_location" : {
                        "lat" : 44.7076335,
                        "lng" : -79.6574892
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "101 km",
                        "value" : 100872
                     },
                     "duration" : {
                        "text" : "55 mins",
                        "value" : 3280
                     },
                     "end_location" : {
                        "lat" : 45.4374529,
                        "lng" : -80.1244863
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-400 N\u003c/b\u003e toward \u003cb\u003eParry Sound\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "wxzoGzgeeNTZPYPYZm@h@u@NOROVK\\C\\BZLPNPRJTJ^D\\B^?XCZG`@Qp@Ur@Sh@AFAF?DAPg@dAS^e@|@yA~Bk@~@_@j@aAnA{@fAg@j@g@j@mAnAy@r@CBYVUTaBlAc@Z]VC@oCfBkAv@qChBiCfBC@yAbAcBfAcBhA{BxAqCjBkAv@_DtBgEpC{DhC]VyDbCeAt@_@V}JxGyA`A{JrGwMxIaN~ImBpAsD`CkCdBa@XeG~DeFdDoFpDmAx@eAn@s@d@_BhAe@\\gAz@w@r@MLeAdAa@f@mA~A]d@}@vAc@v@Ud@[n@u@~Aq@dBKZc@jAUt@_@pAy@vCa@zAo@zBAFkAdECHi@jBW`Ay@pCIX}@bDGVwAbFUz@Y`AK^w@dCa@jA_@|@_@x@o@tA{BxDiA|A]b@_AbACBSRw@t@i@d@g@^s@j@g@\\SLg@\\s@`@_Ab@c@RoAd@qBf@qB\\y@Je@D[Bm@DS@s@BK@_AAm@AyAGaAGw@Kk@Kc@KMCm@Ou@Uu@Ug@Qc@SUMe@Wg@Y?A_@SCA[SKGcBaAwDyBgDmBgAq@gAo@_GkDUOs@c@kC{AIGsKmGsCcBkC}AkHgEoDuBQKOKcC{AeB_AoAs@WO]O_@SiEgCWOwBmA_Ag@]QUKUI}@]k@QWGYIc@K_@I]Gw@Os@Ke@CqAGkBAk@@_ADY@e@Fu@NQB}@P{@RaAZiBr@y@^_@RSL}@l@c@ZA?iA~@{@r@w@n@y@p@gA|@UPiA~@q@h@_@XKHoB`BUPIF{BjB_@X]ZIFqAfAa@Z]Xc@\\g@`@w@n@WT{BhBUPoDxCq@l@OLOJ}AnAMJOLoC|BgElD}GrFcFfEiBxA_@X{DbDyD|C]XkB|AcCrBaBrAsB`BYVc@ZIHIFIHCBa@b@s@x@SVe@v@]h@]h@e@z@]n@KV[n@c@dA{@|BSp@Sr@]lAYpAu@jDwAfMEd@u@jHc@hEAJa@hD?@CRYzBm@lEQjAOfAADSzACRSvASxAi@bEw@nFUfBw@bFWxAYrAe@lBKf@Ox@g@zBI`@Md@Qr@Mr@IVq@jCSp@Wv@Ur@c@nAc@hAc@bAS`@IRe@`AOZCBMVa@t@Wb@?@_@j@c@r@_@l@A?o@z@a@f@s@|@q@z@IHs@t@y@v@iA`AWR]XEDoAx@u@f@}A~@}At@kCdAA?y@VKBcBb@oCd@A?sAPqAJqBJu@?{@?aAAkACe@Ec@Cw@GoBUyC_@eBSaEc@}BYkHw@}BYuEi@yFo@qDa@c@G}AQgEc@aBSc@GsEk@c@EgAOUCaBQWAo@EeBCmB@q@Bw@F_AHo@FKBm@Hm@JaCb@qDn@aKjBoDp@iB\\s@LsB^yAXgARyBTk@BM@M@Y@_BBQAw@CiBMkBWgAWQC_@OgDuAA?o@_@_BeAc@YUOiBiAUQYOs@e@s@a@ECYO_@S_Aa@w@[]K[Kg@Mo@Oi@Me@Ic@GWCA?m@GE?k@Eq@C_@@K?G?{@AA@oADQ@I@[B]DMBi@F_ARwA\\aAZq@XgBv@yAp@a@Pi@T]NsAn@w@\\s@ZeBt@eBr@YLg@Ri@VWLMFoAl@e@RMFmGtCaCbAiGpCmGpC}CtAmJnEcAb@_@R}Ar@eChAmHbDeBt@wObHA?gDzA_@PsB|@_A`@aA\\aAXsA\\e@He@H]DQ@OBe@B_@Be@?m@@m@A_@AUAUAKAo@Gw@IkAQKAUE_IoA_AI[GwASk@I{@My@Ka@C[C]Aa@Ae@Ay@@O?U@u@De@Bg@Fy@Le@Hs@P[JWFGBm@RMDe@Pq@\\iAn@ULMJYP}@r@a@\\g@f@q@p@cAfAsGjH_DjDyB`CA@_CjCiAhAGH{@v@u@n@{@p@y@h@mAt@_Ab@i@T_A`@aE`Bi@Rg@Ti@Ta@RYNc@XmA|@]Xu@n@WVq@x@{@fAQZm@|@w@pAkDvF[h@sBhD}CfFYd@yCzEyA~B_CzDYb@_@n@}BvDcA`BMT[`@GHA@s@~@w@|@cA|@y@p@UPkA|@kAn@}Ar@}B|@gC`AeBp@cA`@gC`Aa@PcA^_DlAkCbAgA`@iA^cAXwA\\ODiB`@eATeATi@L[HiB`@qEbAi@LyInBmOhDs@Ns@JkAHeCLeA?e@As@AgACkD@wNSaHK}EGoHKoCCgACS?O?gAAwEEc@Aw@As@?SAO?c@?w@As@AwJKQAgA?C?}ACIA{@AC?G?WAK?mAAu@?y@?y@@qCFY@gADc@BU@M@_BFu@FsAHqR`Bc@Da@BeAJqCTc@Dc@BkGh@O@{It@K@cBNoK|@kCT{CV_BLcALk@Fe@Hs@L_@JcKnCQFgHhBeCn@uBh@c@HkANe@De@BiAD{@@OA_BEq@E{@Im@KqAWmAY{@Y_Ac@cAc@yAw@qDqBiH_EgDiBIEaCsAyC_BAAaB}@aAg@wAw@IEaB_AsC}AcDeB_@U_A_@i@UcA[_@Iy@Ok@Is@EsBGW@]?aAF{@F[DaAP{@VE@s@VqAl@u@`@m@`@i@\\a@\\aA~@g@l@oAbBc@j@e@p@aA`Bo@dAa@n@oA~AOTmAhB[`@SV[\\i@h@]Z[VONoAz@w@b@g@Ra@N{@Z}@V}Cv@g@LqEjAIB_B`@c@JeAVuA\\yA`@oD|@uCr@cDv@uCr@KDmDz@a@JkCn@oEhAkCn@sBf@M@cG`ByA\\WDk@JQBe@Fa@FG?[@}@FQ?a@@k@@O?k@?}@Ay@Cm@Gi@G}@My@Og@Kc@KOEw@W}@[c@S]O}@c@_Am@o@_@y@m@k@c@i@e@eA}@iA_Ak@e@o@k@kA}@a@[qA{@aB_AmAm@mAi@mAa@iBc@oAUAAc@GE?]E_AGsAGkBEeBCG?_ECgBCmBAuACaCCuAAgAAC?}@AiBAwCEwAC}@?wAEu@?]?uACwAAK?iAAwBCa@Aq@?I?eACgAAS?oCCgBCuAAEAmAEi@Cm@Eq@GGAg@Gk@IqAU}@QKCYGk@O{@Wm@Sc@Oi@Sy@]{@_@oAo@kAq@mAy@uAcAACu@o@iA_AgCcCg@g@u@q@q@q@q@q@u@s@AAwBqB{AuAeA}@w@k@e@Ye@Wc@Ui@Wo@Ws@Ug@Mi@Mk@Ik@Gc@Ei@E_AAg@Ak@@U@e@BUBW@e@FqB\\sATwAVeBZcDn@eDj@i@JgB^gBZ}Dr@{@PeBf@k@RmAh@_@Rk@\\g@Zc@\\WP]Zu@r@a@d@_@d@_@h@k@z@m@x@}@vAy@tA[h@m@|@aArA_@f@a@d@c@b@q@n@aAv@o@`@gBdAoCxAeExBcCpAi@V{C~AwIpEgBbAoB`AyAv@m@\\oBbA_Af@SJgAl@}C~A_CnAOHCBcAh@iHrDkAl@mAn@iAb@o@VgAZWH{@N_@F_@Dq@Hq@Fk@@}@@w@?s@EUA]Ce@Gc@Ei@KaBYq@IGCy@MsAUA?gBYqDm@s@KsGgAuCg@YGkB[a@GiB[kB[A?]GwAUsAUEAa@ECAKAu@IA?e@Ee@Co@C}@AsAA}CBoEBiBBaGBeFDU?}SNk@?iFDgEFyBHaBBiLb@gHVcGVwK`@mI\\_J\\yHZaCHoFR_FRiBHG?E?eFPc@@s@BK?qGXI@aK\\eAFeBJwCRkBRcCT_@BoLvA}En@uEl@sGv@kJjA{BRsEl@k@Hc@FaBTaH|@{Ft@_@DmLxAmC\\kM|A}Df@gPtBiFn@aI`A_Ef@{BXkBTaCX{BXaALyFr@}@J{@F{ADeAB}@A{@Em@C{@Ie@Im@Kq@Kw@Q}@Y{@WoAe@yEeBYKkCcAcCaAeAc@uAi@cBq@sAa@gA]w@SoAWiASeAK_BMgCGU?A?a@?u@?{BJ{CR_AHw@F{@FwD\\kGf@A?w@H{DZqBPeAHc@DuBRoBNw@FK@mANqANo@Hm@Ji@Jk@Ji@Jc@Ja@Hs@PmAZiA^k@NYLcA\\sAf@KDw@ZwAh@MFgCdAaC`AkBt@QFyCfAe@P_A^gAd@{PxGqEfBgBr@aC~@_@Na@PmAb@_A^eBp@aC~@kAd@a@NkFpBeA`@cBv@y@b@GBm@\\a@T[Ro@^]Va@TIFaAp@{AhA_@Vc@^_At@KHkAdA{AvAeAfA_BjBkAtAg@n@cDxDu@~@EDUXoB~B[^[\\EFwEvFGFSVGHo@t@uAzAs@t@qAlA_At@oAz@s@`@CBOFQJm@\\QH]P]Pg@TaA\\A@iA^[HQFG@IB_@J}@Pi@Jo@Lo@Ho@FaAFsADkAD_FBc@?c@@cC@o@@oCBQ?wAFc@Ba@@}@HeAL_@FOBeARA?u@Pu@Pq@TsAd@g@Pu@XqBz@aDzAcBv@cAd@cBv@iCjAa@RgCjAyDhBcCbAaCx@y@Xe@Pm@Nu@TgB`@u@P_ANWD]Hm@Hu@Lm@HgANmC`@k@FwAPIB{@LyB`@gC\\gAPwFx@eC^k@HeDf@yARc@FA@sEp@c@Fc@Fa@FaBR}CZgL~@a@BA?eBNa@Bq@F_BPWB[DE@k@H_@Hm@LuA^s@Ro@Tw@Zo@Xy@b@q@`@w@f@s@h@cAz@q@t@y@x@s@x@w@bAcArAi@r@oAfBkBrC}A|Ba@l@_AtAu@fAgA~A}BfDsA`Bw@~@cAjA_BzA_@Vm@f@OHy@h@eB|@C@cBp@eAZa@LwA`@A?e@Hi@Hm@HG?o@FoAFw@@a@?m@@o@Ci@COAoAM_AMmASqA[_AW_AYAAuBm@wC{@{@Wu@SoB_@s@IOAEA_BQuAEYA]Ai@?E?w@@I?g@Bg@D}@FaAJE@u@NsAVq@ReAZi@Rm@TA@c@Ri@Xq@Zm@`@UPSPIFk@b@kAz@aAt@m@b@QNg@^UR_At@wAjA_Av@sAhAcA|@]Z]Va@X[RAByAhAcAt@]RuFtEcBvA{@r@aEdDa@Zk@d@KFQPcDhC[VYT}BdB}AdAgAn@iAj@eBt@uAd@uCt@_BVE@aALuAJs@DoAD_A?C?oAAsACcAEcBK{BKuAKeDOqAIk@EoCOmBKgBI[Cy@EgBKuAGsAKYAy@CeBE_ABqAD_AFaAJaAN}@NaAT}@Tu@VYJaBv@kAl@_@Vm@^cAv@iA~@q@n@_AdA{@~@GH_AhAiAfBk@`Au@tAu@zAu@xAGJuAfCsAjC_B|Cm@lAUb@Uf@Wf@Wj@m@jAk@nAUb@S`@Q\\Wf@OXQ\\Ud@Yf@Ub@Ud@o@nAo@lAUd@eAvB}BpEGLuApCqD~G]t@e@|@_@r@g@z@_@l@EHKNOVi@v@[f@Y\\m@x@q@t@e@d@]\\_@\\]XwAjAe@Z]TC@]Ta@Va@RYNu@`@w@^a@Re@T{Ar@a@Ra@Re@Rq@Z_@PCBQHi@X{@d@]R_@V[RYRm@b@IFQLe@`@]X[X_@^EBYZq@t@aAdAq@hAk@z@g@v@]h@a@t@Wf@Uf@Q^Q\\MXKVKVQf@Sj@Un@Qp@i@~AOf@Qj@Mh@Mj@S|@Q~@Q`AMt@Kl@Kt@YvBs@zGALi@|EGb@In@I`AIv@KdAKz@K|@QhBMnAMnAGl@UzBW~BUzB[xCIx@Ef@UtBIbAK|@?@[lDIb@ALE^OpAQdBCPEd@K~@W`C]bDEb@MfAg@pEGh@MlASxAMv@Mz@Y|Aa@nBQv@Op@Qp@Of@Md@IVIZITIZIVQf@O^w@pB[p@ITeArCm@|AgA~C[hAK\\i@`B[hASz@WdAWpACJUvAUbBUtBOpBIrAAVAVC|@IxC@~ABlBJfEBl@RdILvE^dJN`ELxCFdB@b@B`A?^FbD?x@AbBAh@?p@EjAE`BCj@EfACn@AFCv@Cb@WjGIdCK`D?DM|DAr@E~@Ar@CxAElACdC?f@Ap@ANCdACtAInDGlCGbDIpDShIGnCCt@ALOfCObBC`@UfB[pBa@xBADI^GVi@bCY~@IXENQj@Sd@M\\O^IRKZGJQb@c@z@a@t@_@v@Wd@Wd@k@~@u@fAe@n@UXa@`@q@v@]\\A@a@^}@v@k@f@iAv@WLSLKF]Pe@R_@NC@y@ZG@a@Na@NkE`BeBn@eA^a@NcA^C@gEdBa@NcAb@GB_@NYLcAd@a@R]NA@i@ZWNkAt@s@h@]X_@Xe@`@MLGDy@z@STGHYZAB]`@q@z@[f@_@h@]h@OVWf@U`@]r@CFa@|@O\\EJSh@GNWr@Yz@Sj@Qj@CH_@lAKXcBjFOd@O^IZM`@Qj@Oj@W|@Y`AADQp@Qd@Ul@Sh@c@tAy@xB{@xBeA`CaAtBs@rACHqB`D{CrEm@|@gBbCW\\}B~CY^SXuDbFwAnBcArAmB`CGDyB~CqD`FiBhCcC|CqBfC{@~@aBxBs@bAc@p@MRSZ{@zAU`@[n@[p@EHs@zAa@fAWt@Sp@Qf@CHSb@Qf@Qb@Wx@Qf@Of@Qd@Ol@Qh@Qp@YlAUbAQx@M|@Mz@QdAG\\MbAKd@Ih@Gb@AHG`@Ox@Kr@Ip@Kz@Iz@Kz@SvAQlAWlB?DYhCGf@MbAIr@[hCq@`Gw@dHUpBUrBgAbJu@jGgApI]pC_@vCKx@YzB]`DQzAAJIn@EZQzAa@`CYrAOt@Kn@Ih@SbAY`Ba@bBg@nBe@rAIX[~@g@nAKTiAxB{AhCaBdC[n@KPk@t@WXKNMLY\\GFUTQRq@l@cAz@mA~@KFYRg@X[T{@d@A@_@Ty@^GBIDkAd@w@VKB_AXA?SFKB_@H_@JA?cCj@iCp@A@a@J]Jw@TQFa@LWHKBo@RsAh@s@ZaB~@wA|@k@`@_Ap@aA|@_A~@g@f@_AjAo@`A[p@gAdBcB|CqAzBiApBg@~@u@rAA@Wd@cAfBaAfBoCjFMRm@nAa@v@q@tA[r@}@|AcAlBm@pAYl@s@xAw@xA{A`C]d@a@h@a@f@a@b@s@p@cAz@w@j@w@d@y@d@{@b@mAj@qAl@_A\\}@V_AReBTeAFsCZwBT}ATa@Hw@Tk@Ls@Ty@\\a@Pa@NiAj@w@h@k@b@g@^aA|@gAlAq@z@qA`Bo@|@k@|@k@`Ag@dA_A|BKVs@pB{@rCq@hCo@`C}AxFg@bBSt@c@hBI\\Ib@u@pCe@vAi@|Am@`By@jB[p@k@fAi@bAi@z@CFiAbBkClDg@r@g@p@]\\uFdH[`@[`@{EdGg@j@e@h@GHWZUZUZmBjCe@j@e@j@i@p@eB|BaCzCmCjDyDdFgQzTY\\MNABIJiDhEw@bA}@dAgAnAkAhASR_@ZMLkAbA]ZMLoBvA]XuCvB}AdAa@Xq@d@aC~AaC~Ai@`@_BhAgBhAc@VuAn@C@]Ny@\\mA`@a@Na@Lc@LUHKBiB`@g@L]FG@o@HO@yALsAFm@F_AFuAHkAF_CNkBNiBRcALqATgBZaATeBb@aAXkBl@_A`@u@ZuB|@oCzAqBjAgCfBaClBwCrC[\\_@XkAjAkArA_AdA]b@iEdFABgBrBoEfFa@d@kCzCa@d@aBlBe@f@MN?@UTQRkAlAQR{CpD{DvEgLxMkE`FoAvAUXuB|BsAdBqAdBoAlB{@tAcAnBi@dAq@xAa@~@c@fAk@bBa@hAc@tAi@hB]rAc@jB[zA]fBSjAQfASpASzAMxAOxAQ|BKrAEbAIdBGnBAn@GvEAvFCtKArHCxSAr@?lFAlCA|DAxGApFEzECxAEdBCt@ItBIxAKzAEr@Gx@S|BK`AGj@_@xCU~ACN{@bF}@`Eg@|B_AdDkAvDyBjGqA|DuChI"
                     },
                     "start_location" : {
                        "lat" : 44.7068444,
                        "lng" : -79.6583804
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "140 km",
                        "value" : 139876
                     },
                     "duration" : {
                        "text" : "1 hour 23 mins",
                        "value" : 4981
                     },
                     "end_location" : {
                        "lat" : 46.43584629999999,
                        "lng" : -80.9684821
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-69 N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "aoitG`i`hNQj@Sj@CHqKl[Qj@_EpLO`@cLrXkClFiE|GmBbC]\\iAlAaA`AoBjBk@f@MLqJzIqI|HeBxAgAbAy@x@w@~@W`@A?W`@KN_AnAUXeAjAQVa@l@sCrCCBsBjB]Xa@^qBtBuA`Bs@~@wAlBSXaH~J_JpMOT[`@iBjCkFxHoAfBoAfBeBfC_IdLY`@yB~CuCbEc@n@wDrFs@dAoAhBwArBmIxLY`@A@mAdBgBjC[b@aAvAsGjJY`@oAhBY`@s@bAcCnDoAhBY`@mAhBiBjCoAfBiBhCoAfBW^u@fAkAdB_DxEaCjD{AzBCDiAnBYd@GJgCpEYh@cJjPWd@_BvCYd@{K`ScHfM_BtCyB|DWd@aElHo@jAwBxDi@`AwDzGyB|DwBzDcHdMo@jA{EtI{AlCcHdMkAvB{DjHWd@OXiB~CaA`B{BlD{BfDm@~@Y`@kJnNmAjBy@jAgNzSYb@}GdK{CtE{CrEYb@mAhBiC|DeA|AkIfMoFbIm@x@yIfNCDU\\yHdLY`@wDtFYb@qBvCcA|AuJ|NiI~LoEzG{CrEYb@m@~@oFdIs@dAoEzGuDvFsH~KYb@Yb@aLtP}A~BaGbJmAhBYb@Yb@{CrEcGbJQVoDrFGHYb@qGnJg@v@gBjCgBlCY`@Yb@[b@KP{EjHYb@Yb@mAhBQVGJiBjCk@|@cCbEWb@Yd@Wb@A@yArCADUf@Yn@{@rBk@rASh@Yp@c@jASj@w@vBWp@Qj@eBtEk@|AWz@}@|BgAvC{@`CeEhLaBlE_AfCc@lACD}BlG{@~B}@~B}@`Ce@pAcBtEaAlCgA|CSh@q@nB_AfC{@~BqApDeBxE?@iA~CYt@Ul@g@~AK^oB~GIZq@fCOl@?@mFtROp@Oj@yCvKcDfMQl@q@fCaAtDwAdFsCtKA@{A|FsAbFOl@y@xCYfAa@zAIXGR_@xA]nAU|@Of@Qp@W~@Ux@M`@I\\Uz@W|@U~@Y~@U|@U|@YbAa@|Ac@~A]nA]pAUz@W~@e@fB_@vAENU|@Sr@Y~@Sx@Mb@IZYbA_@xAa@zAW~@_@zAk@zBo@bCc@dBa@bBSbASdAS`ASfAQ`AYdBYbBa@fC]dB_@`Bw@bCaAjCYl@aAvBi@dAGNmBzDmAfCgBpDo@nAe@`Au@xAoAjCWl@Wj@O^q@hBADMf@Ql@Qn@Sx@YnAMb@CLm@zD_AzGKt@_ApFOp@{@~C[|@Ul@Yr@qAtCUd@ADoB`DKN[`@gAzA]`@iCfDu@`AsAdBoAbBa@j@eBxB[`@iB~BoD~EcBpB]`@QTgBpBQPgHvG}AzAuDhDqFdFoBfB_A|@cDxCON]ZuClC]\\OLsCjCm@j@IHSRg@b@SPeAbAWTsBhBIJ]^oBdBo@j@a@\\iA`Ao@j@iBbBqBhBi@d@C@_BtASRaCtB{ApA?@GDqB`BA?gBvAeAz@{D`Dw@p@o@f@yAnAKHw@f@]Re@Vc@TUJw@^MD]LC@k@PuAZm@Lk@J}@PE@_APOBu@NI@YFeAR}@PG@I@}@P]FC@k@Ja@H[Fc@Hk@L}@Pg@J]FG@QD_APWDgEr@iB\\oB^c@HkCf@gAXaAPuAVcEv@qATi@HeAReATq@LyA`@e@NqAh@q@Z_@Ra@Tw@b@i@^}@r@w@p@qBlBGH{AvAwAvAaBzAmBhBEBWVqBjBmAjAkCfCkBhBeB`ByAvA{AvAq@p@WREF_@XUTsBbB_BjAs@f@aAl@iBbAOHcAf@i@V_Bp@_Cx@eAZ}@VwCt@a@Jo@NiCn@aCl@_@HsEhAYFgHdB[H_E`AuD|@mCn@oAZeAVE@[HmAXoBf@u@PoAZYFeAVIBYFeAVa@JiAV]JkAXkAXcDt@q@PWFkCl@oEdAeATm@NuBf@m@Nc@La@Je@N_Bh@C@eAd@]Ra@Rk@^SLOJMLm@d@ONURo@l@a@`@]^WZy@bAoAfBgBjCQVYb@[b@mAhBY`@gBlCY`@oAhBYb@Yb@W^A@Yb@Yb@wDvFmAlBEFSZcCnDmAhB}CpE{A|BYb@s@dAu@dAwIpMo@~@{CrEYb@Yb@Y`@wDvFYb@ORILYb@wDvFgBjCYb@sIjMkErGsJrNaCpD[`@eG`JcAxAABY`@Yb@SViCxDeHlKm@|@oN~ScCnDYb@Y`@s@fAY`@mAhBgBjCoDjFg@p@IJc@j@QVEDUXIJw@~@QR]\\CDg@h@sApAGH_Az@u@l@kA|@_@XMJi@^c@Xk@\\m@^kAn@WLqAp@mB`AeB|@cErBa@RaAf@cCnAe@Vu@^cBx@a@Ra@RmJvEmKlF_@RcHlDsIhEaAf@iIdEmHnDmB`Aw@^u@`@e@Rq@Xw@Z_Bx@sBbAo@\\mAl@aAf@w@`@GBeAf@u@^cAh@mAl@}@d@uBbAwAr@iCpAcCnAiCnA{@b@OHa@RC@gAh@WLWLGDg@VkB~@}@b@{DnBkAl@a@ReAh@gCnAuDlB}@b@OFy@b@eB|@mCrA_Bv@}Ax@e@TeBz@qCtAs@^aAf@eB|@uCzAaB~@KFa@Ty@d@gB`Ao@ZoCzA}@f@qGlDaLfGqEbCuBjAIFw@`@sBjAoAr@A?]TaB~@_HtDu@b@oDlBwBlAwJnFyHfE}DvBsFzC}@d@o@^}DtBWNcGdDcB~@aAh@g@XsBhAy@b@gDhB}@f@yC`B{F|CwAv@_@RaAh@WL_DdBYNu@b@m@Zy@d@o@^g@ZsQvJiAl@oAr@oFtCaAh@kLlGSJ_FjC}IxEa@R{C`Bw@b@u@^g@VWJEB]Ni@Tm@T}@\\u@Ti@Nq@Ra@Jk@NC?[HE@WDc@J]Fa@F]FUDE?]DI@i@Fi@Dc@D]BWBy@FoCPG@yCRqBLkGd@k@Hu@DqAJkBNyALi@DqAJe@D]DUBYDQBSDOBMBQDYHYHQFODWHOFSHSHQHSHOFOHUJWNMHSJSLMHOJSN_@Zc@ZGF_@\\]\\[ZYZA?Y\\A@SVW\\SVQXORQXQVQ\\U^QZSb@Uf@Ud@[v@Sd@Ob@Sh@K\\Of@Of@Oh@Kf@Mb@Kd@Kf@Id@Id@I`@Ij@G`@Gd@EXCR?@C\\Gh@CX?FGv@Gx@KxACh@Er@Gt@Q`Dk@jJO`CEp@S|CWtEO`CEp@Et@Cf@C\\KxAI`AIt@Gn@Mz@CTE^Ib@Il@Kf@Kh@Mh@]|A]pACH]dAYx@[x@Sj@]v@_@r@Wh@a@r@_@n@[f@_@h@Y`@MP{@dAwAdB{@bAy@bA[^KLeAnAiAtAaAjA_AhAoA~AWZ[^GHST[`@C@kB|BuAbBqA~Aa@d@mAxA[`@yCpDmGtHoA|ASTGH_AhAg@n@m@p@YZWXUT[VWTUP[T]Ry@b@[PYLm@XOFsAp@a@Pa@ReD|AcAd@a@RA@]NmCpA{Ar@w@\\sBbAgAh@aChAcChAyCtAiBz@aCfAkDbBwCtAgBx@w@^gD|AULKDgD|AWLkB|@a@PeBx@uCtAuAn@cAf@e@Ti@XQHqB`AcAd@[NEB_@Py@^gAd@e@TSHcGrCGB_@RaDzAmEvB_@PeBx@ULsAn@GBc@RgBx@cElBaAb@_@Pc@ReClAcD|AA?cBx@{CxAk@XiEnBiAh@cGrCa@PmCnAmErBSJw@^wBbAkGtCsJrEaAb@sB~@u@Vk@PYHc@JmD~@a@J{A`@}ElAeAXuIvB}MhDkAZ{UhGkCp@ODSDiItBkItB{Ct@sKlCuA\\wDbAwBh@cFrAkCr@A?kD~@_B`@I@a@LoG~AaIpBkCp@{@RsCt@c@LmD|@c@LA?gCn@eAVwFtAcAVkCp@mD|@a@Jc@Ju@RkFrAWFu@Ra@JGBkFrAc@Lc@JoEjAwDbAqCp@c@Lg@L]Da@HeAPu@FS@c@Bq@@gA?m@Am@CA?a@Gc@EI?YESCs@Ka@IEAiAYYGoCs@oCu@YGa@Ma@Kc@KQGOE{Aa@MCcAYc@Ma@KOEwAa@c@MgBe@UGwCy@iBg@cAYa@Mc@Ma@Ma@KKE{Aa@c@K]KqDeAa@MMEUGa@MeAYw@SME}C{@OEa@IQEQCc@Ia@EA?[CEAc@AUAM?o@@i@@e@DYBe@FWD_@HA@mA\\}ClAqBz@sBx@eIfDwB~@aC`AeBt@a@NoH~CcA`@a@Pa@P_@Na@Pa@PiDvAeBr@a@PeCdAcA`@aDrAi@Ta@PoHzCa@PcA`@a@PgDvAcBr@c@Pa@PoAj@k@TIDa@NYLg@LC@e@JQBQDYDE?UBW?Y@I?_@?e@Ci@ESEOAm@Mk@MiCy@GCw@Us@UUG[IUGq@MA?MAOCSC]EE?QCQAc@C}ADsBPk@Dc@DwA^wAd@}An@kFjCwCxAoAr@a@Pm@XiB~@sCrAOHuCzAk@ZaD~AiBhAo@b@yDfCcD~BSNkBpAuBzAgBlAmAz@o@d@_BhAw@j@eBjAaBhA}CtBIFu@d@QJy@^yA^_APo@JA?wAJwABcF[WC_EY}AMuFa@cF]{F_@iBMkBMaAIiE[QCc@COA{BQwBGuBCcGM{FDE?wFAu@CkBEsDKgACgAEkAC]CgAIoCSmCSgAGsDY{CSaCQsDWaIk@gAIiBMgAIeBKsCUoCS[CsBMiBMuDUa@CgAKc@Cc@EeAIgAIgAKgAIiBOA?eAIgAI}@GeAUc@KmAW}@Ua@Ma@K_D_Ao@WgDyAi@U}Aq@aAc@iDyAaAc@OGQIa@Sa@QaAc@aAc@cAc@cAc@cBu@aAc@cBy@cAe@_@Qa@SqD_BcBu@cAe@s@WcAa@{@_@mBq@eA_@gBe@iCu@kCu@C?cB]gASiB]cAQe@IeASeAQkB[]GCAc@Ec@EgAKc@Cc@Aw@IiBQG?mBIY?}@AyCBiB@A?oCNk@DYBsDXk@DaBRmCXc@FkBRgALs@HkGr@cAJe@FyFl@gALeALA?iBRc@Dc@Dc@Dc@FeAJc@Dc@FA?a@DeALgAJc@DkBRg@F]DgAJmCXkBRqD^mCXc@FM@UBgALa@Fc@Fc@Dc@Fc@Dc@Fa@DeCXQBy@NM@E@G@w@NsE|@UDgCv@YHwAd@MDy@VKDcAb@[LiA^cBv@eCjAaCrAy@d@}@r@]X}@r@{BfB_@X_@X]X}@r@_@X]X_@X]X_@X]XKHSN}@t@]Z]X_@Z{@t@_@X]Z]X_@Z]X_@Z{@t@_@X{AnA{@t@_@Z{@t@}AnAqAfAsAfA_EjDqAhAcDlC{AnAw@n@aA|@}AvAYZkCpC{A`ByA|AoA~AeBxBwBlCoBbC{@fAKNoCpDm@v@mBfCqAbBmBfCgCfDmBfCkBdCmBfCy@hAuAbBcGrH_IbKkJtLqAbB[`@_EfF[`@SVwFrHiG~HoIvKqCpDmBlCqA|Aw@`AsA`BiCdDY`@i@n@i@p@w@~@w@`A_BlBQPuAzAy@z@]\\]^ABYXg@f@o@n@]\\]Z]\\{@x@wAvAGFqAnAi@h@m@l@kAhA[X{A|AKJuCnCiAhAqErEg@f@cCbCaE|D[ZqBtBCBmErEGBGDOLWRoBjBMLeAfAmAhAUT}B|Bk@j@gBfBA@w@x@yAvASRe@f@{@x@{@z@uCpC_A|@uAzAa@d@a@f@STSVORIJs@|@cAtAOVg@z@ILCFKNa@p@OT?@[f@}AtCyB|DyB~Do@jAILMVKPaCfEaCdEGLOVEFCDaA~AILg@x@[d@{@tAGFyApBGHABk@x@c@n@Yb@QR}AlBaBhBqD`E?@IHMNEDuDvD_CxBOJ?@IHoAfAa@XqAfAkA~@y@j@A@}@p@_@VIFSNA?IFA@sAz@sMrImDxBA?KFSL?@KDeF`D[RSLA@IFaKvGSLA@IFUNiBlAuEzCKFiAt@i@ZA@IFULIFuBnAKHcAl@qD`C?@KFGBkAx@KFSL?@KF_DhBmCfBu@d@GBKHi@\\a@VKFq@b@uAv@aAb@ULsAn@KDSHA?[NiA`@KDSHA@mDrAqHxCA?sAf@q@VyBx@qBx@qChA{@Zi@Ta@NiC`AoKbEqChAaE`B_DpAIDiG~Ba@Ni@R_Bl@eBn@?@a@NUFeA`@yAn@ULc@Pi@Rg@RwAl@gBn@kAd@eAd@w@Zc@TaAf@mAv@aB`AyAbA]TyAlA{AlA?@{@p@{GzFqAdAEBWTEBw@n@EDuAhA]XGFqAhAg@b@oAhA]XeB~A{AnAQPcKtIeCtBeBxAkA~@WT{@r@{ArAcElDqNxL_KtI[X}ApAuFvEMJaCtBGFoDzCuD`DsBfB_EfDo@h@{AtAKJi@h@gAhACB_AfAcBvBw@fAGHmAfBmAlB]h@o@lAA@Ud@_BzCWd@?@gDlGYj@y@zAKRs@pAe@t@cA~AyAtB{ApBCDuAzACBaBfB{AtAyAnAQNw@n@]VeBfAa@T[Pc@Ty@b@o@\\{@^c@R[LeAb@}FbCgMnFsElBa@PeBr@oCjAYJcC`AC@a@PcA`@gDvAkAd@_E`BaA^g@R]NaBp@iAb@oAb@qCv@IBA?eATgB\\SBi@HuAPuANqCTaAFsAJe@@aAFqBJuALcDR}DT}AH]BI@{@HS@S@U@yBP}AJu@Fm@DiBVk@FsAVeATKBwA\\_AVg@PUJs@TaBr@uAl@A?aBz@}@f@iAt@cBhAkBvAs@n@sAjA}@z@cAbAONcAfAY`@Y\\s@fAKN}@pAg@v@s@jA}@zAs@tAe@|@CF[n@[n@g@hAWl@Wn@MXUp@i@tAWv@m@lBw@hCgKz^iDzLu@~BeBpFeAxCUr@cBlEmCpG]x@mAhCc@|@{@hBw@|A[r@aBdDcAtBcArBuAnCiCnFoFnLcAxBUf@gCpF}CzGUf@cAxBMZcAxBuDhIc@bA{@fBQ\\c@~@KXQVyAbDiEhJe@bA_@~@]p@uBvEuArCUf@q@rA}@`BKXOXYh@a@t@m@bAwArBSXi@l@g@j@eAtAaAxAc@h@_@d@g@d@c@`@kB|AmA`Ag@^q@d@y@h@_B|@o@Z?@y@^s@^YJg@Rc@PWJA@c@N}@Z{@Xi@LSFWFi@NSD]DoAJo@Fo@F{BV_@Dg@Da@Be@BW@_BHi@@YBO@m@Fg@Fk@Ji@Fk@Ho@De@BaAFa@@g@BwBFU@oADsADm@@i@BeA?sB@cABU@aAFi@DWBWDqAVaAJsAFgBHeAFm@Fc@D_ALoAPgAVy@VaAVkC~@}Al@[LwB~@{BjAMHULA@QJe@XQNSLQLSLOLe@\\y@n@QLABC@KHSPa@^a@b@SRc@b@QRQPSXaBdBGHIJA@q@v@MNQT{@lAQRo@`AILKLINw@pAS^_CjE]n@_BxC{ApCCFYf@Wd@_BxCoCdFaBzC_BvCiAtByExIi@~@_@p@Wd@oH`NoEhI{IjPWf@cDbG}BhEyFlKuBzD}CzFWf@uAfCMTm@hAKPi@bAk@~@Wd@cBhCa@j@q@`A[`@e@j@m@t@eAhAa@b@eB`BSTeBxAsAbAOLa@X[RQJe@\\m@\\a@TQJe@VUJOHC@QJoAj@YJwAh@UHq@TqA^MDE@uA\\QDUFUDKBA?a@FMDUB[FmAPK@WBc@DiBPgADq@@yB@eBAuAGe@CgBQI?sBSc@IWCqAUWGgAWcDaAc@MOE_DoAwDoBkC}AUOmEmCaAk@sBkAa@WoBkAeBcAQKQMaB_A{@g@iQmKoAs@qDwBMISM_B_AcI{ESMeBcAmAq@{@c@c@SYMuAi@OGg@Qy@Ws@QSEeB]qBWmAKeAEcBEiGM{FKuEIe@Aa@AmCEuAA}A@qADy@FsAPyAT}@T}@V_AZ{@\\KFYJ_Ad@C@kAr@kAv@m@d@WTm@h@k@h@u@v@[^e@h@s@|@OPm@z@eB|BmCrDaBzBQTm@x@KLUZQVcF|GeBdCwAfB[b@aErFSXC@W^ABEDeBhCcC`D_BnB[^YZk@h@u@r@EBu@t@u@n@WRc@Zc@Vo@ZoCjAuBn@iB`@q@JaALgAJaAFs@@q@?_AAs@CeAGs@GWEmI}@{AWsC_@sBY}Ek@a@G{C]_Fi@wBSeSaCi@G{Fq@qAO_Eg@}@Kc@Gy@MkBW_AOQEq@Om@OOG[Ig@Sa@OWKOGQISKe@Uk@]q@a@g@]c@YKIs@k@WWe@c@sDyDmAsAA?m@q@cAiAAA[]yAaBy@y@_BaBg@i@c@a@UUCAy@q@c@[e@]UOmCuAWMq@[oA_@i@QICq@Qu@Qu@MGAmAMcAI_AEeA?i@?_@?g@BY?I@k@Bu@HiANu@Lc@Lm@Lm@Pa@NmAd@uGzCMFa@RgI~DeAj@WLsExB}E`CaLrFy@d@aAj@eAn@{CrB]VA?u@h@}CbC_CrBKHiB~A_A|@g@f@w@x@GHu@z@y@dAeApAo@x@s@`Aw@fAq@`A_AzAsAtBw@lAk@z@u@jA}@pAk@|@m@x@]h@o@|@Yf@a@n@kAhBk@`A}@pA_ApAuA`Bw@`Ai@p@{@lAq@|@m@z@u@t@gAfAQPUPGF_@ZsAdAcBvAcBlAyAdAmAz@q@d@cCjBw@p@KH_Ax@m@h@UPoBpAq@b@s@f@yAfAuBzAqA~@m@d@e@d@c@b@gAdAa@^u@r@m@n@e@b@IHs@t@o@n@i@h@[Ze@h@SX{@hAgA~AmAfBo@dA{@zAm@`A?@Wb@ABm@hAA@cApBYh@Ud@EHk@fAu@jAg@hAo@tA}@rBm@|AcAjC_@`AqBlFaAbCs@`Bu@hB}@nBe@fAq@vAu@|Aq@rAu@vAS`@U^CD_AfB}CpFq@hA?@W^W`@EHaAzAi@v@m@|@QVqAjBoBjCo@|@yAdB{BlCi@l@sEtEGF]\\_GxFKJ}AvAwFhEoHzF[VA@yDxCmEhD]XyDxCa@Z}AjAkAz@aBjAeDzBi@Z}@j@w@d@iCtAs@`@s@\\cD`B{@`@oAh@}An@kAb@mBv@gFfBiCz@gC|@mL~Ds@TwG`CyLfEKBa@NA@gCz@eA\\a@NmBn@aBf@_@LeA^mFlBmDpAqGzBa@Na@Lc@NkDfAa@Na@NcBj@iBr@uBx@SFkDjA_DdAMFWJq@XiB`A]P]PaAj@o@b@MHkCnB_CxBA@sBvBaBrBaAzAeAhBu@|AmAtC_@|@u@zBOh@Of@a@dBs@fD]rBGf@KdAKt@@b@_@rDCj@UnDQpCk@xIOxCa@`Ia@dII~AKlBEr@SzD@tAIp@ALIh@Mt@YbBMj@GVQv@Ol@A@Sv@Ux@[`A]tAk@pBELUr@Ob@Yl@Wh@QZEHQXWb@{@pAMPw@jAm@bAa@v@Q\\Qb@Wr@Ob@CHSt@Qt@GRIb@Kj@CPE`@CNI|@Ef@Ef@?JCj@?FCr@?BAz@?f@?N?b@@n@Bl@B|@?BFfAJlBHdADr@FjABZDp@NpCZnFXpF@DDxABz@@\\@~@BpBD~F@lBBbDBfF?~C@nC@tA?tBB|C@dELzY@bC?tA@lD@z@Af@A\\Ar@A`AGxA[nGAVc@nICh@IbBK`Bs@pNa@lH]lGIfBaAdRYfFk@|KQnDOrC[xFm@fLg@hJStDYbGIxAe@hJg@zJIjBU`EWbFUnEMpCKfBUpEGFCBAFCFCx@C`@MpDAh@AfACrB"
                     },
                     "start_location" : {
                        "lat" : 45.4374529,
                        "lng" : -80.1244863
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 623
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 46.4356975,
                        "lng" : -80.9685966
                     },
                     "html_instructions" : "Take the \u003cb\u003eON-17 W\u003c/b\u003e ramp to \u003cb\u003eSault Ste. Marie\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "aolzG~cemNCLELCPCf@Cb@Ib@GTIXGLMNML_@Te@?WASCUGOGIGYQIIKKIKIMSa@IUGQESEYAMAU?U?QB]F]HW?CFONWHMJKNKRKBALCRAV?J@LBJDPJRRJJPRf@p@~@vADDDBJD"
                     },
                     "start_location" : {
                        "lat" : 46.43584629999999,
                        "lng" : -80.9684821
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "32.7 km",
                        "value" : 32717
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1158
                     },
                     "end_location" : {
                        "lat" : 46.3769284,
                        "lng" : -81.347385
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHwy 17\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-17\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "cnlzGvdemN@B@@NTVd@zB|DfAlBXf@Vd@d@|@h@fALZTh@d@lAVt@Vz@Pt@VdA`@lBt@rD`@zBZfB@Jl@xDDPJVZhCb@bEZ|C|@`JZ~Cl@jGLlAt@nH?@XnC\\lDD`@^rD^rDFj@X|Ch@vFPhBf@~EJjAHv@HhABr@F~ABpAA\\?rCEjBGlAMtBGp@Gr@?BW`CCNOdAc@|Bc@bBKd@gAzEmAhFOn@s@xCSbAoCtLu@hDeAxEI`@CDKb@GZGXgAtEe@~BUbAIh@]jB[pCOfBIz@GtBAZ?TCdA?rA?h@BxB@XZ~Gl@tGl@dFVzBJx@P|Af@fEd@~EPvCBXBr@HnBDxB@V@t@@x@@`C?R?xDC`BCZUbGCp@C`@APQpBk@bFe@hDSnACFKf@m@`DWrA_@xA[fAWx@e@bBk@~AWr@Qb@Q`@Sh@k@tAYh@[n@S`@_@p@OZEF[j@cD|FaBvCsH`NaA`ByBxD{B|Di@~@w@xAu@rAk@jA_AtB[z@{@`CKZOf@s@nCCJg@bCMn@e@hDc@bEMbBGvAGvAEhAE`FFzD@t@B~@Dx@JrBPdCD^ZzCPlAJn@Hh@@D^rBVdAn@xBj@jBh@zAb@hAd@`Ad@fApAlCZp@Vd@|A`DpB`E~AdDfCjF|A~CJTpCxFZn@d@~@dBlDz@fB\\v@|A~CVf@jAdCtFhLVh@fA~Bz@dBZp@Vf@`C|EpF~KVf@zA|CN\\nB`EzA|C`BfD`C|ErAfCjAfCf@hAP`@Vp@\\z@d@nARj@n@lB~@`D|@fDXlAr@fDz@nEpAfJZpDX`DBl@Fv@JrA@XJ`DD`BBz@HtD?xB?zAApACtA?JElBO`E?^GhAE|@EfAEz@MzACb@Er@I~@yBrM_@hBQv@y@xCqCtJiAnF}@rEw@rD[xAcDxOMp@Mn@I^uClNgAjFm@zCq@pD_@xBSvAIn@Gx@IjAADCl@E|@Cl@EfAC~@?t@AJ@tBBlA@|@DjAD|@Dz@HlAL|ALhAX~BXdBPdAjBpL~@|FdAtGbArGbBfKRpAPdAHh@ZlBfA`H`@hC\\`CRrAJz@NvAThC@NTbDLpC\\hHVdEPvBHz@RdBVpB@LH`@RhAj@~Cp@bDh@fCt@tDZ|AhGrZvEhUzFnYh@lCd@rC\\rBXtBXpBXtBBZP|AVtCN~ARtBl@vHNbCNxBNfCBn@@BRjEHrBLjDHdDBr@JzDJnDXtJPlG@h@HvDNrEHbDD~ABrAHnD@?PhEDv@DjAHjANvBNnB\\nDD`@P~ANpAXzBNfAVjB\\rBFd@BJ`@zB|@rEVjA`@dBd@nBPn@`@xAxA~E?BRj@DPr@pBTr@Xv@`@dAPd@p@`Bv@jBtAxCnAjCP^dCdFBHrC|Fz@hBlAdC|@lBTf@zA`DTd@?@Tf@?@`@z@HTLVFP`AhCb@jABFLd@Vr@Lb@Pl@Pl@h@lBHXNl@FRb@dBXxAThAV~AhAlGzClQfApGxCfQfBdKJn@PdAfAnGr@`EJp@~@zFj@jDd@nCt@fEd@lCd@nCt@dEbA~Fr@hEjA|G|CtQd@lCb@nCJj@Hf@R|A@LJp@BTHv@H`APpBT`ERbFBhCBpB?n@?V?tBC|AAjAANAb@Cv@IzAE|@O|AMtBe@nEk@pEQfAAFWvAYtAQx@ERg@xBMl@CFy@tDCJK`@}@zD_BbH]|ACDKf@On@k@hCABOl@m@lCaBpHOn@y@pDa@fBS|@y@lD_@fBU`AUhAYtAa@~ACLK^]rAi@rBYlAG\\a@lB?BYvAWxAIb@[fCQ|AIt@Q|BCVCd@Ez@KrBAj@G|ACpB?^?RAdB@t@?l@@D@pABhA@VFvALrBD\\Dp@@LT|BNzANnAR~ATxAVpAd@nCPdAJn@`@rCDVh@lDVfBf@dDh@lDJn@lApH`ChOhDzTt@~E|@tFh@dD\\tBFZbAbGPjAV~ApBvM|@`GHb@p@dETjAJh@VrAXpAd@jBZtAh@pB\\nA`@lAHXdBdEz@zBlAlCz@hBBDXb@p@rAhAnBjAfBnAfB~ArBpB~BbBtBnClDRTZ`@fBxBb@h@Z^Z`@xAfBhC|C`BpB~EjG`BrB`BrBpBjCtBhCpA`B`BpBbChCtBfC~@lArA`BpDrERVFHrA~AFHlAvA`CzCpGfIbFnGfApArBhChAvA"
                     },
                     "start_location" : {
                        "lat" : 46.4356975,
                        "lng" : -80.9685966
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "269 km",
                        "value" : 269006
                     },
                     "duration" : {
                        "text" : "2 hours 55 mins",
                        "value" : 10485
                     },
                     "end_location" : {
                        "lat" : 46.5207121,
                        "lng" : -84.27651059999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHwy 17\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "y~`zGbdooNf@p@n@~@PZXb@DFXf@N\\FLPb@Tf@b@jA`@nARr@^tAVnAPrAJz@P|ADf@@JH`AXrDLbB@HDj@PzCL`B?HDd@@LTfCd@vFRdDPlCHhAFbALrAXvCFVXjEFr@?HFl@LrAPxBRvCN`BDr@N`CFbANrBJdAZ`Ev@hKPhC^pFPxBLdBVnCNbB@?ZjELdBXtDBV\\|ERhCLlBThC?BFp@NnBDh@LdBFr@@PB^B^@RDp@Dr@Bb@@NB\\BT@RB\\Dd@JnAHrA`@zERfCDt@NdB?HDh@@JHv@J`ABPJfARxAXpBBTRtAL|@Jl@Jr@PhA`@xBf@rCf@jC?@t@zD^tBH^Lx@Jf@RpA\\nBBNH^\\vB`@`CJj@Ln@XbBX|AN|@P`AXbBTnAh@dDd@pC`ApFRfA`@zB`AjFLj@F^FXDTJn@Z~AHd@@Jh@|CJl@PbANbAF`@Fh@Hj@Ht@Ht@BVB\\HfAFbABXDr@?FBn@@R@f@@|@BxABfBDhBBp@D~@DzA@^FlCFvBH|C@d@?LF|BB`ADxADnANnEDj@F|@Fp@BPB^Ff@Hr@DZFl@Jt@BTDX?@Jl@TrAN`ABLF`@@DLn@Z~AFVJb@Tv@l@nBx@zBh@vA`@dA`@`Ah@dA\\r@j@dAdAhBFJPXjAlBVb@PXz@tAVb@lAlBVd@TZv@pAXb@Vb@r@hAjBzCdAdBXb@jI|MlClElAlBdBpCx@vAFHf@dAb@~@^~@@B^`A`@fATt@HXNl@L`@XhAZ`B\\fBPfA`BlJb@fCF^Jp@r@`EX`BFb@j@|CJn@nAjHJh@p@`E~@rFd@nCJp@X|AbArFJl@?BNl@Ln@P~@XnA\\zALf@f@`Bh@jBtAhEdCxHnD`LBFLb@Rj@nBjGPj@v@dC\\dApAdEb@vARl@rCdJPj@Pj@hArDPj@d@xAp@xBrGrRl@hBr@rB`@rAtA~DvE~MPj@nAnDPj@Rj@bArC|@lClAnDlAnDd@vAr@pBXz@Pj@Rl@d@vAd@vARh@Pl@Vx@d@zAH\\Lf@b@bBRx@Pz@\\bBP|@@DX~AHf@@FJj@TbBHd@\\jCFr@d@bF@JD`@LvBLnBNpDF`C@p@BpABhB?f@?`@AfD?x@Ar@?FElBAd@A|@Ch@Cp@?@]tHUnEMnCEr@Cp@Ex@QzDiAhU?DEr@E~@KfCIbBE|@Er@Ep@Q`EEz@E|A?t@A~A?pAB|ABr@@`@DxAHhA@FJ|AP`BPtAPhA?@b@dCJb@R|@V|@\\jARn@DJL^Rj@nA|C`AbCfBnEBDRh@tAfDRf@nAzC\\z@zCrHl@zAN^BHdAbCP`@Th@vAjDPd@Th@bBfEf@tAbAfDNp@d@zBLr@DTPfAHp@Jv@LjA@HFr@HdADj@Bt@DfAHvB?vCAjAE`BAl@?DI~AGx@?@Ep@Iz@MlAK~@AHGf@]|BwAlJ?BKl@In@W`B_@~BQbAc@pCYlB[pBYbBu@jDk@vBSl@Qh@i@zAWl@Yn@IRg@hAe@x@e@x@u@fAa@l@s@jAS\\S^CDc@z@e@bAQ`@KTIRQf@A@a@rA_AvD{@fE}@lEgAnFCJs@dDCJiAjFc@nBKf@_@bBWtAU~ACNQzAMtAIlAEn@G~@Cf@EhAA`A?NAr@?t@@nCB|@Br@?NJlBLlBNzAFf@PrANdAP|@^vB`AdF`AjFbAnF^pBLn@DRFZlA`HjA~F~@hF|@`Fb@`ChBlJb@bCPz@bApFNp@fC~MLn@~CpPd@bCfA~FJj@Z~ALp@z@rEtB|KpA~GnEpUJn@Jf@\\fBHd@BH\\tBPpAPvALlAF|@HhADdAF`BBpA?hBAx@?TA\\Ar@?@Cp@AVAZEl@Gv@CXCVGr@?@KfAEXG`@QjAIb@Mn@Id@a@hBMf@Mh@q@tDEVEXMz@OdAMbAKnAO|BEp@Er@CvAC`B?lB?FDpCHfCPxBLdBTzBLhA`@`C`@jB^zAlEhNzHlV@DNd@|HrV@Fz@jCbGnR|@nC`EnMd@xAjHfUPj@Pj@jApDbAdDnA~DPj@j@hBrAbEBF~@dCx@rBlAnCtDnHbAnBVf@rGdM`@t@tBbEVf@pDbHjA|BzN`YnCnFh@bAlAnCt@jBf@zAhAtDNl@l@`CNx@XvA\\rB`@fCl@|DhBzLDZJn@XrBl@lFFd@h@tF^nDb@hELnARxBv@lHNvAJ~@Hp@XjC@HHp@Db@RpA^xBZpAb@`B\\~@z@pBv@|An@pA`CxEdAxBnAzC|AxD`B~DrCdHXr@dDhIlA|C\\dAJZLd@@FTx@Tx@RbA?@VpALt@Jr@@DHp@Fd@N|AHtAHnADlA@pB@pA@`B?n@?hDA|N?`U?r@AhO?zC?r@AfO?r@?rM?|C?r@@dHDjBDdAL~BBRFp@?@NzAJx@\\jCr@~Eh@fDLz@\\`Cn@dE^~BZvBVbBBNvBpNpBvMN`Ad@|CXrBZ|BHv@BVD`@\\dEj@zGt@zIDX`AhL^nEBXR~BhAdMZrDj@bGdA~LTnCPvBJ|AJbAJrAFp@TjCHvA@ZHtALlF@|@DbEBbE?X@Z@xE@xCB`G@rD?T?V?jA?|@Cx@GnBEt@AZCVO~CSxCOtCe@rHMpBANSvCE~@IlAQ|BGtA]`GCXEv@Cd@c@dHk@~JkAbQSxCUbDSvCEr@MdBCd@a@|FUfDGr@MdB?@En@OdB?FGj@StBE^MrAKbAIp@KlACVQbBGr@ABEl@EXEn@CZANCZA`@Cd@Cv@?|@?V?h@?l@@f@BZ@T@\\B\\Dn@BV@FDd@?BD^Ff@Hl@F^DTLj@HZH^Tt@\\hAvB`HrCbJPj@bCvHlAzDPj@f@~AzAtEJVX~@Rl@DJJ^FRTt@DNNl@@@ZlARz@H\\R~@Pv@VvA@FTvA?@Jn@Hh@PxABPD^Fn@HbAFt@B\\^pFPhCBV^dFnAvQDr@f@pHF|@^tFZjEDr@LdB^~FDp@LfBF|@^rFDr@Fp@RxC?Fb@rGP|BLnAJ~@Lt@@HJd@BLT~@DNPj@Pl@hApDRj@d@vABJL^x@bC`ClH@F~A|EPj@x@bCPj@hDlKHR`A|CRj@hDlKTr@`@nAPl@BHVbANz@Lv@Jz@Ht@B`@@RHpADr@@ZJ~C@RV|HD|AJ|CHxCRfNHzE@r@Bv@@r@DlCPhL?@@p@?@NhJ?@?NNvI?B@n@?B?JH~D@r@?B@n@@r@?BJrF@~@@@DxC@l@?FDlBBn@Dz@FdAH~ABXFt@F|@d@pGVlDLxA?H@@Fv@Hv@Fb@@@BTRpAJh@Ll@?@Pz@Hb@Ll@@@Z|A?@Lj@@@XtAjArFNp@\\zA?@\\zA?@z@zDR`Ar@dD@JFZDR?DJp@Hp@z@pK~@~K\\lEf@`G~@pLbA|KJpAFp@H|@Hl@Jt@Lh@Jj@V~@Ld@Vr@b@`AZn@NVJRPVb@p@f@l@HHHHRPJFNNt@f@\\R~@`@\\Nh@N\\F@@^FB?d@Dl@FfBLfBNvGf@b@DnCT^DTB\\Dd@Hb@Jh@Lr@Rp@T^Pf@T`@T^TNJr@f@d@^h@b@b@b@\\^DFTXZ^BB|@pA`@r@BDTb@@@Xj@Rb@Xp@d@jAX`AV|@Tz@Lh@Pr@d@xBd@|Bl@lC^jBl@lCLn@Nn@vAzGLn@Nl@vA|GNl@x@|Dl@lC\\~ALl@z@|DlAvFb@bBr@lCbAtD|BtI~AxFz@|CZdADRj@hBVr@HZb@hATn@HVNZDLTh@Xj@Vf@zAtCHNLTzHpNZj@l@dAnEdI`BzCbBzCFJ~@bBnAdCBFd@~@f@hAf@lAx@pBl@`BHTPh@@@Z`Ad@zAl@tBb@bBVfAR|@ZvALl@FXThAJj@b@bCBJdAnFZ~AvBtLvCdPJn@Lp@x@tExE`XLn@VtAbAzFf@pCjE|UHd@X~ALp@bC`NZ~AJp@Z~AJn@dCbNlDxRLn@hBbKLn@pCrO`FtXf@nC~BzLDXTjADRJn@DTLp@Lx@Jt@Hf@Jx@Fh@F`@BZ?HFh@Df@LlBFv@Dx@NxBNzBFz@RdDXtEHpADp@`@lGZdFTrDNvBLpBJlBBVBZV~DVvDNlCHtAF~@HfABXBh@LpAHbAFn@J~@BRHh@Hh@N|@l@hC|@jDNl@dCnJfDjMNl@`@zAlAlEfAbElBdH`ApDH^v@tC\\vARz@R`AVvABPHn@DXLz@P|AR`CJ~AHjCH|DLrEPzGNvFLzDZ|GHnANvBVtC@F`@dELdAbBvOD^TtBZpC?BZvCRhBh@`F\\hDPbBHp@NvAlAxLTrB~@vIZrC^lDDXD`@D^@DFp@Hp@ZvCD\\t@fHp@nG\\xCv@lHdC`Ul@tFx@zHhB~PXhCXlCHr@XbCXbCJbAH|@HdAHxAC~EEtAC~@SzECjACnA?F?P?X?N@j@@j@@\\Dp@JzAd@bFr@pGd@lF\\zDb@zEJhAN~ABZH~@Dv@Ft@Bp@Dl@?FBh@@^BnA?rA@pB@`@?bBBnB@t@B~@Bv@Bf@Dn@Db@HdAJlANdB^xDBRFr@NbBH|@h@|FTjCHz@DZ`A`Ld@jFz@xJx@`Jx@`JpAxNhAfMhBpSd@bFRvBT~B`@vGVxEDbAd@~LHdBt@~SBr@DjA@Zb@zKV`GT`GPlEt@hRPbENhEDnA`@hKDdAz@pUj@bOh@lNnA`\\RxEn@|OPnEL~DBj@h@vMBp@Dr@Bp@v@nR\\dJNbER|EF`BNrDLzCBjADfA@dB?tA?VAbCG`CAVGzAOpCYlDGn@W~B]xCy@hG_@tCsB|O_@xCaBzMSvBM~AKrAKfCGlCExD@`A?r@?r@?bABhGFpN@vC?B@r@DbG@r@@r@@r@?r@@r@F`G@lDHbO?r@@fB@nEBzC@fB?r@@zCBlEBf^?vH@~E?tH?|B?vI?r@?vH?r@Ar@?fB?r@?fB?r@?r@?nE?@?z@Ah@Ab@Ab@Cf@Eh@Ej@Gr@Iv@[tBGd@Kl@Kb@_@lBGNa@zAc@vAg@dBy@zC[lAKh@EPG\\ETEZEREZEZCTIf@AHIp@AJGd@Gn@SbBShBOrAI~@Ip@APE^Ip@QlBAVC^AR?JCr@Ab@?j@@nA@d@@`@Bv@DfAHfAFj@BTLvAFh@Jx@d@tCt@~EV`BJp@lBvLb@rCPdA`BnKLv@Jz@TdBLpAFn@Dv@HtADhBDtCB~B?d@?nA?jBAvG@jK@f\\?rM?jA?n@@jJ?jJ?r@@fA?nA?lC?hL@zC?r@?r@?r@?bG@bT?xC?zC?zC?r@?r@?fB?r@@bG?|@DdE@pABdCLpPT~XBnE@r@DlE?r@LrMH~KDnGBlCPnM@|@@r@D~G@dCFfCB|@BfAHxAJpAPzABRFf@RpATtAp@tD\\jBX`B^rBJh@Ln@BLzBjMLn@X~At@`Er@`EhB`KJn@`ApFZ`B`Hd`@PbAjAlGLn@BPNr@v@dDT|@Lh@b@rAZz@Tl@HPb@~@f@`Al@dA@BV^p@hAlEnGpBpCb@j@^h@zBjDT\\b@n@l@~@NRVf@Zl@Vh@N\\JZDLHTHTHZLf@DXFXLt@@PD\\BRBZFz@Bv@B|@?dAAt@Ad@C^AXCVCXCXE\\G\\Gf@GXKl@a@|AOl@a@|AqAxEoA~EmAvEaBtGi@tBc@dBaAvDiBlI_E`Qy@dDA@[pAm@dBe@nAaBnD}BrEwA|C_@dAYx@Sl@W`AOl@Ol@gAjEwAlGmAzFs@vCiA|Ei@vBc@nBA@Ml@Sx@[pAWfA[tAOl@Ib@I^GXGZGZEVEVEXGb@Gd@C\\E\\E\\CZATC`@C^C`@A`@C\\Ch@Ah@Cd@Cv@EdAGnAAVCr@IhCMvCEpAIlCE~@ElAEdAElAAh@Ad@Cd@IvC?HCr@Aj@ClAAp@Av@CpA?fAAz@AjAAjA?Z?dA?`@?fB?pC@dDD~K?r@@pD@dEBrN@vH@jA?nA?zB?^@tB?v@?z@?n@AZ?RAr@Cj@Cr@Cf@?HEx@EfAE`AANEbACdAE|@Cp@Cv@EpACv@Et@Q~EKtCKnDCh@Ab@A^AX?VAZAp@Cz@An@ElCEdBG~DEvBAb@CtBAd@Ar@AZC~ACnAAfAA`@AT?f@Av@Ah@?d@AH?j@?p@?|@Ar@?`@?n@?n@?v@@`A?~A?bA?F@jA@dABnG@pABvFB`HDbH@r@?rADvG@fBFrM?r@DvHFfO@r@@zB?rA@r@DjJBjFBbF@hB?J@zA?r@@hBBrE@hC@zAB|D@tC?n@@X?tA@zA?v@@lB@`B?r@?fBDpB?|@@l@Br@@l@B\\Bl@Fl@Fz@\\xE@PT|Cf@|Gf@|GTxCHtARvCBl@Fp@Bl@@\\@\\?b@@j@?`@?j@?f@?\\?f@?@Ad@Ap@Ah@AX?JARCXA`@C^C^AZE^Ef@ANIjAG~@KlAQxBIjAM`BGbASfCMjB_@~FCb@Ej@Ab@Cl@A^ANAf@Ab@?l@A`@?`@?@@l@?D?f@?t@?x@?v@?h@?H?x@?~@?fA?bB?bA?hA?`B?DAjA?hA?l@?t@Af@?\\AFAp@Ap@El@Cj@Cd@Eh@Ef@AJCZEb@CVIt@In@CHCTEZENGd@Mh@AFKj@Mj@]vAU~@WdAK\\YlAc@dBa@`B{AbGOl@Ol@aAxDyBtIg@pBi@xBMb@Op@Qp@I`@Mj@I`@G^Kn@Ij@Ih@It@A@C\\CJ?FGh@Ir@El@Ex@Ev@Cj@Cn@ChAAh@?X?BAz@Aj@?P?B?n@?B@z@DhA?TBl@?BFhA@FBr@Bf@B~@@ZBhA?L?P?x@AdAA|@GzAA`@C^CXCd@Gr@Ed@Gb@In@EZCNO`AQjAq@hFEVc@tCk@bEKn@EZa@tCGf@E\\CLGj@Gh@AJGd@AJEr@Gn@Iv@Gr@El@Gp@Ex@GfAE~@AJE~@Cn@Cx@C~@?JCr@?ZC`A?HAhAA\\?r@?HApB?rA?P?t@?z@?|@@p@AnE?~D?lH?V?vB?hAAfACl@?XEbACZAPAXC\\C^AXEXIv@Gf@MbACPETEZKd@Ot@WdAQv@Ol@AF[rASv@Kf@YlAEL]|ACJq@rCSfAMl@G^G`@G`@G`@Gd@Gd@Gh@Eh@Eb@SjDC^AVAb@An@?b@A`@?ZAf@?|@?|@A~@?pA?r@?D?pAAtEAdB?rAAhE?ZAtC?lB?NAtEApA?`@A`F?|AAlD?|B?xAAhGCnH?pCAnB?~A?L?fBAP@R?d@BnA?FDz@FzAL~A@TJ`AH~@@HLlAN|ABRLvAH~@VlCR|BFp@NdBLnAJfAFp@N~ANbC@ZDp@Br@?BDzA@xA?TAd@?L?dACtAATMjDG|B?h@Ar@?J?f@?\\?|ADjAHhBLzBRbDHhADr@D|@VtDRdDPfCLtBBXTrDLdBF`ANhC@JFhADr@Bt@@~@@pBAj@?p@A|@Cz@C`AKjBKzAM`BQbCu@tIKrAOjBWhD_@dEi@xG[jDa@tEk@lHSdCUzDWzGQvFGdBEpAG`BA|@CbA?r@?j@?H?f@?J@`@?P@j@?F@x@Bt@Bh@?@Dr@@PL~AHhABLFl@NdAPnA@@TrAPv@Ll@Nt@Tz@XdAPt@J`@`@fBNp@FZJn@Jv@L|@NrAJjADj@d@`GN`BH~@NpBDd@J|ABb@Dv@Bv@BbABdA?`CAhDC|CEbHIrOAzAG`JExFCnEAdA?zB?`@?r@?R?r@B`ADzAFnAF`ALnBP~BDb@\\zEB^HbALdBDh@NhB?DDp@Bj@B`ABnABjBDlL?r@?~@F`G?r@DrELxCH`BDv@Br@DpAF`B@pA?~ACjB?LGxAA\\ATK`BY~DGbAKbBA@GhCEvB?fBBvBDlAB|@@TJtBNrBBPB^RpBh@dFbApJnBrRZtCRtBB`@Dr@HfAFpABVHbCBp@@^DvBF`G?R?zC@d@GjG?DCr@ObG?zBA|BBnBDbBDlA@JBf@B`@PdBJ`AD\\LdAHp@?@^rCHn@hAzIh@fEJn@^tCHp@~@hH@Lf@vD^lCLjAHz@BZFh@Dn@Bl@DbA@ZD|A@tA?H?~AAp@Ar@CpDApACr@AnAIjEKjJKxI?PGxC?ZEdC@dBBbB@f@Br@F|@@FDj@@TDZLpABPHp@F\\BRJn@Lp@RdAFVRx@^hA^hA\\z@HRJT|@vB@BRh@Th@L^Zz@Rn@ZnA@B\\xA?@Nl@?@`@xBDVHn@BNJ|@J~@Bf@HbARzCJdBDr@JzAF|@Dp@F|@HbAHhA?@Fp@BVBXF^V|BFh@NbATfBDXJn@ZzBp@zEHn@\\|BNfAVjBj@dEjAlIHj@x@vFfAzH|C|TDVJ|@`AhIHp@^|Cv@rGp@bG`CpSR~APzA\\vCbBrNvBbRXdCZdChBrOl@lFB\\Hp@BRRfCL`BDr@Dp@HlBHhBBfABpABrBBrA?X@X@dBBhBHjJ@dADnEHvID`F@pBB~BBvBBjC?NBz@Bj@B`@?DBl@@BFjAJfA?JR`CTjCNdBBTFp@PtBD`@Fr@H|@ZlDf@xFr@~Hd@rFJvAFlAD|@@h@@t@@|A@z@GxHMjIAn@At@I`GCt@ElCIpECtAIvBG|@Er@AXUrDe@lIAVKdBEr@KhBK`BGr@GfAQvCSpDYjE?FGtAC|@ANAh@?z@AjA@hBBfADdBFbAH`BBXNhCZfFN`CFtADt@@T@\\@b@@dA@p@A|@A~@CjAMdBGv@Ej@QnAYfBa@~BOx@Mz@E`@Gd@Gj@?BCZARCVCXAb@Cl@Aj@A\\?DAj@?n@?D?l@?D@n@@zA?N@r@BxC@r@FlGFnE@x@Br@B|@Bf@Bd@Dj@Dv@LnAPdBL|@NdATpALr@VdAf@rBZfATp@f@vA@@Rh@HPJTP`@hA~BjAzBh@fAVd@jAzBXh@~@jBjA~Bn@lAf@dAXr@BDVn@Vp@Vr@Rl@Ld@FTL^Pt@Pr@RbAVtATfALr@@HPx@TfANr@VbAX`ANd@Vt@^bA`@bAFL`@z@Tf@n@tA`AnBl@tARd@@BPd@Tl@Pd@`@rAV~@^zAXnAVtAV|ABLL~@JdAHfAF`@HtAHpAFrAT|FV`GZtHFdBDr@LxCXhHPlE@d@HbBD~ABn@Bb@@j@@LBtA@l@?rA?r@CnEMnREvHEtEAv@AvA?r@Ar@GvHAt@AbBAr@EhEAx@?r@CnAC~B?@Ap@CbAGlAIzAG`AGh@Ix@K`AIt@o@hFWlBe@rDu@bG_AnHaAxHCXi@dEIr@Id@Iv@EZKv@Kt@e@bDa@rCKn@[zBCVOrAQjBQrBGbBEpACbAAnAApB@P@vABnADhAFvA@DJ`BLhALxARxA@HPbAhA~FLr@h@nCpApGNx@Ln@Z~AF\\j@lCP`Av@~DLn@Z~ALn@Jh@t@tDt@vDh@vCNdAFb@Hn@Hv@J~@F~@HhAFjABtABrA@tA?bACfAAj@?@Cx@Cp@Aj@A@Ex@IxAEp@ObCa@dGOdCMhBS|Cw@bMQlCQdC]nFC`@a@~FOzBIdAUhDUhDAJWdDMrBCn@G|AAPGpAEfAGzAClAAd@A\\CvBAzD?vAA`CArD?tCAbCCnI?f@?fDAvBA|C?vA?h@Ar@?r@AzCCfOAvCApEAjJ?fA?f@?D?Z?d@@j@@bB@`A@~@@p@@r@@|@DxBDrB@`A@F@r@BtAHlD`@bTDjB@R?L@b@@\\BX@VBh@Fp@BZBb@Ff@D^D\\Hr@Hn@BNDTHj@F`@H^F\\H^H`@Lh@J`@Pn@Vz@J\\HVXz@HRHTHRFPHPvAjDR`@lBtEXr@P`@Rj@HVL^Rn@L`@Jb@FRBLJ`@DNNp@Lp@Lp@Hd@H`@?DHh@DTBXFb@Fp@JbAFx@Fn@Bn@F`ABv@@^?J@n@@`@?`@?l@?nAArACp@Aj@Cn@Cf@El@APIfACZC`@EZC\\G`@Ir@Ip@CPEREVG^Kf@S`AS~@Kb@Qr@]pA]pAUx@k@rBmChJs@dCaB|F_@fAWv@Y~@sAvEc@xAM^Kd@aAjDa@tAW|@iBhG[fAM`@KZGRo@hBa@hAWl@CFO\\[x@y@dBi@lAwAbDo@xAkAlCoHzPgC|FYp@c@dAc@jAKVKXGTM`@GRGVMf@I\\GXEXI^Ij@If@E^Gb@Gn@Gt@ANAH?BCZAVCd@Af@AX?LAd@A`@?n@BrA?\\Bj@@f@B\\?FDj@?BH~@BZFd@Hl@Hj@N|@Lr@Jb@Lb@HZ@DXbAz@vC`@pATv@Nj@Lh@Jd@Px@RnAHb@D^Ht@HdAHdA?HB\\?T@H@d@@v@?F?j@?n@Af@Al@Aj@Cj@Ex@E\\ANGp@O|AqAlKeAtI]lCWxBmA|J[hCYfCIp@_@~C{@bHGj@WlBE^CZE`@Eb@Ep@Ej@Ch@Cn@AZA\\A\\Ab@?^?X?h@?x@@^@\\@^@\\B^@^Bf@B\\BZD^B`@J~@?BHt@LrA@JVvCDl@Bb@Dl@Bv@@`A?X?^A^?j@Ct@C`@C\\C^C`@WfDWvDm@fIa@pFEr@Q|BGp@C^SrCSlCU`D[bEEp@y@vKCZ?HEh@_@|EUhD_@dFM~AGt@C^EXE^AJAHEVKp@GXI`@Md@CFENIXIRGPIRKRMXS^QZORKNMNQTWVMLQLKJIFSJOHOJc@RUHMDODUFQDUF[D_@FA?k@F]De@DUBO@Q?[@]A_@CQASCWEYISGWKWMIEIGSM]S_@YWUkAaASQSOYQUMUMQKSKSKUIAAUIYISGYGUGWCCAWCSC]Ce@A[?a@?_@BY@WBOBUBYFYFUFWHSFOFWLa@R_@TEDYR_@ZONMLSTUX[b@OTMRMTOZO\\MXIPIVMb@M^GTIXEREPIb@E\\GZE`@Gl@Gx@Cb@AZA\\A`@?V?L?^?d@@h@@~@@r@@z@?X?b@Ar@AXAZAVCXCd@Gj@KlAMdAGr@Iv@Eh@En@Er@AVAX?\\AV?h@?\\@`@@j@@Z@`@B`@Bh@LtBHrAPvCPzC?HN~BL~BLzBF|@NhCTtDDz@p@lLHtABTFhAFnAFpA@p@Br@@H@p@B~@JdENzHLnFXpM?@@j@?D?h@@p@?j@Ap@?b@Ap@C`AAXA`@A`@Ad@C`@C`@Et@Cf@Gx@Iz@M|A[rDs@tHU`CGv@APCPCX?DC\\Er@EbAC\\A\\Av@CfA?h@A`@?L@bA@r@@p@?VBp@Bb@@ZDn@FpAL`BJxAJrAJnA^rENlBFj@?DTrCPtB\\vEZpD?@D^@P@NBd@Dt@Dz@@n@@l@@X@d@?`A?hA?p@C|@CdACx@Ev@Ev@Gx@Gv@Iv@Iv@Gh@G`@Id@Kr@Id@Kf@G\\Kb@Kd@Kf@CDMj@M`@Oh@Wz@_@nAg@zAcAdDwApEeAdDQf@qBvG_CnHQj@CFI\\Ot@Mp@I^[bAOb@Qj@aBjFuCfJ]hAQj@sCdJABgAlDwBfHuBzG{A~Eg@|AcBrFOd@g@xAm@~Ao@fB{@lB_AjBkAfBEFcAtA_AnA]d@qBdCeAlAoAfAu@l@GF_Aj@{@^WNgBl@u@T}AXcARcIdAG@gAXqAh@kAj@sAx@}BvBsA~A{@jAg@p@{G~K{@pAYb@u@hAaBnC_@l@u@rAk@nASb@m@tAYv@c@pA}@|Cg@zBUjAI`@GVOz@Gd@WhBs@vG[pCKbAg@nEc@~DIp@MbAMrA{@~HiAbLi@~EGf@CRG\\UlAY|Ak@fC_A~Ci@|A}@`CUf@cA`Cg@pAgAhD_@nAQr@W`Ay@fEc@|Bg@pCCPKf@cAtEk@|Cc@~Bq@pD_@fB]vAQp@k@fBk@zAGNm@vAg@fAk@fAu@lA{@nAIJyBxCcAtAoBhCY^eCzC}AfBGHcFxFsB`CaBvBGJw@lA_A|AINu@xAc@~@Uf@{@jBaBjDKTq@|A}@lBIRKRWf@S\\]j@MRKN[`@W\\aAjAgCtCA@Y^[^KLUXeA`BQXg@~@Yj@e@fAg@lASh@ADm@jBUx@Qp@Mf@]~AAHMn@ALIb@UzAShBKp@Ip@?D{@dHIp@OtAc@nDy@hHWfCIn@StB_@hE]lEMnBC~@CpACrACbBAfB?t@AbE?fC@lC@vE@`EAlCEdCEbBKbCM~AGt@G|@ShBOnA]|BqBrMAHw@hFQdAe@zCWzASbAMr@I\\Sz@[jAYbA[~@ITm@~AYn@g@fAaAhBA@Yb@Yb@q@bAcAnAQREDWVWXcA|@e@^k@b@IFyA|@mAl@a@Re@TaErBo@\\uAp@cDdBw@`@oCtAa@Ps@^aEtBkExBoAn@SJqKpF{EbCm@\\iAh@gDbBuAz@s@b@MJ[RoAbA{AtAk@j@y@~@m@r@m@v@{AzBq@jAw@xAi@dAo@rAEJM\\Sf@c@lAg@tAUv@[dAYbAWfAUbAWpAQz@W|AAFKn@E\\U`BMfAAHAJQnBIlAGz@MdDEfACz@?dAAx@?L?dB@pA?fB?hA?tA?zB?r@?r@@xE?lHBxM@jO@tJ?r@?zC@xQ?T@hG@jR?|L@zM?`GCfCEjAG|ACZQxBSzB[tB[jBWjAS~@K\\Sx@s@~B[z@o@~Ac@`Ae@~@{@zAuBdDgLjQy@nASZYb@mAjBmAjBaD`FaCrDaCrDYb@Yb@mNjTg@v@}AdCYb@S\\ADMRGJILMXOXO\\MVEJQ`@Qb@_@~@Sp@Ut@Qj@ADM`@Mf@EPERIXERMt@Op@Kp@ERIh@Kv@Ip@?DGj@Gd@Eh@Ch@GrAAZAVCj@C~@AbAAjA?z@AvH?r@?fB?nE?jJ?fA?^?tB?d@?`ABxADbBF|AJ|AHpAJbA?BPvALz@Lz@Lp@P|@z@hEP|@P`ADXHd@L~@NrA@LFx@H|@FrAFdA@^Bf@BvA?z@@x@Ap@?JAn@E~AQnGAFAj@OlEIvCGjBSnGO`EMlEQ~F]jLCr@ElAElAIzCCp@KzCCn@GjBCr@EdBOnEMrDCr@QbGCp@KzCGjBK|CAj@I`Cu@pWK|CGxBGnBEdB_@|LG`CEvACn@Ad@AX?R?XC`B?D?z@?b@?n@?xAB|I@fK@xH@lB?hE@~K@lO?jE?H?h@?vAMpQApAC`C?XA^Aj@Aj@Aj@Cl@Cn@?BCn@Ep@Gp@?@Gt@Eb@AJCXGb@EZE^Ij@Mx@SfAKn@e@pCMp@Y~AKp@Y~AKp@i@xCSlA[jBUpAm@lDi@~CiAvGi@~CYdBMl@[lBQnAUdBKdAEb@C`@E`@C`@C`@A^Cn@Cb@A`@AZAv@?r@Aj@?v@?~@?dG?lC?pC@nH?zQ@XIbE@nF?lA?rNAr@?n@?B?pD@dA@~@?\\BzA@v@@v@@n@BjAFrAD~@F|AFnAHrAHtAJnAJ~AHx@HdAN|ALpAPtALjAF^Fd@R~ABLRpATxAN|@@JThANz@P~@XvAPx@DNLh@Nr@Pt@Pp@J`@J^Lf@J`@JZNj@J^Rt@Nf@Rj@Pj@d@xARn@Xt@Xt@x@tBXr@Zx@@?Xt@Vl@LVTf@\\r@\\t@^t@DHVf@b@x@f@~@pBhDdBtCDFRZnAtBfAhBVb@Xb@Xd@nArBxBrDfBvCzCbFdBtCNXXb@jEhHbBpCVd@j@~@h@|@Vd@T`@Rd@Zn@Zr@Xr@@BPd@Tp@Nf@@BPj@?@Nd@Lh@Nl@Px@Ll@H\\DXDPDZ@FDZBLD\\Hh@D`@D^Fh@BRBTFx@@RDf@Dx@?DDr@Bt@@n@@h@?H@b@?j@?Z?L?|B?rH?X?n@?B@fA?h@@T@b@Bv@Dp@Br@HhAFt@Fn@@HBVHn@F`@D`@F\\DZHd@@JPz@Hd@Ll@@@Rz@H\\DRRp@X~@?B\\|@HVTh@DJf@lAP`@P^DFVf@Xj@j@hATf@|A~CTd@j@fAXn@Vf@Vd@dAvBl@lABFj@fAt@zANXJPJRjClFf@bAp@tAbBfD|A`DbBjDjCjF~@jBtC~FzAzCbAtBbDtGVf@Tf@R^jCnFtAjCbAvB`@~@DHN^@DVn@Vt@Pf@^pALd@VbATdANt@PbAF\\TbBF\\@PTxBLbBL~BD|A@~@?D?r@@~@?vC?lB?vAAzJ?`C?fK?~A?`NApU?jNArI?pR?bJ?x@AfQAzQ?bEAnN?fF?r@AfX?fK?xC?nRBrG@bC@nD?p@@pEFbT?l@AfDGpBI~AEn@KtAQdBw@fIMrAGr@_@xDK`Ae@dFi@nFe@nFe@rEM|AQrA]fCSjAEROz@q@~Ck@zBc@|A[`Ac@lAe@rA_@|@oA|CUf@Sh@[t@u@lBUp@Mb@YbAa@dBQdAId@Kt@Kz@Gt@InACp@ATCf@AfA?xBDtAD`ADt@B^BVLnARxAZdB?@Nn@?@Nl@Vz@\\fATn@Rn@vAdEp@lBFTlAlD`BxEbAvCHVRh@~@jC`@lAdBbF`@pAz@dCbEtLpCdIhAbEZtAXtAZfBRzABR`@fEHhADp@H`BD|A@jB?`@?`C?xD@pC?dG?zB@zE?zA?vB?pC?nDAbE?tB?fD?pA?xD?`CAh]A|DA|AGdBGhAAPGdAI|@OtACPQnAOfAOt@SfAWdAIZa@zAg@`BWv@Wl@GP_A~BMRe@`A]j@CFi@z@m@|@s@|@]`@]^SRCDSNg@f@YT]ZmA`AyCdCiFfEyCdCuC~BsAfAo@j@u@p@u@v@g@j@c@h@m@|@gAbBq@pA}@lBm@xAENg@xAm@jBIV]jAcAhDGRoCxIyA~Ei@fB}@vC]~@Up@Ob@g@rAg@jAGN[t@]v@]p@Yp@S`@CFS\\MVQZi@bA{@vAcA~A[d@o@|@[`@[^[b@q@x@aAlAs@z@IJQRaAlAiAtAKLk@r@a@f@{AhB}@dAGHe@l@QTYb@a@l@i@~@Wf@_@t@]r@Q^o@rA]|@Up@CHYbAWfAQx@CJIb@I\\O`AQhAMbAADYtCI`AInAIjBIhBEhBKxCCj@YzJCr@Cz@QxFQfGE~@EdBCr@C|@ExBCx@?z@?HAr@?PApB?pABpC?v@BzB@~BD`GFvJBbGHfLBfEB~CBbB?r@BzCBnDBzBLzORjWJhMBxEBnCFbG?r@FvHHjJ@r@JhO@r@@b@BjFBbD@j@?r@DbG@rA@nADvHBzC?r@BpB?h@@r@@fB@dA@`@?r@@r@@r@BzCDnEBdDDjE?x@B`B@r@@r@@bABlGB`B?^?j@CjACnAEbAGt@Gr@K`AWtBABOnAMfAEr@Gp@GbBAt@AZ?V?l@@~A?L@r@@l@HrEFlDDxBBdAHnFJpF@r@PxJDlCFnDFdDL~GVvOHxEDpCFbD@j@@r@JbGHlEL~GBjA@d@BxB@xB@pAAx@An@Cd@Cz@EfAG|@Gz@IbAKfAOjAQpAQ`AGXETO|@s@pD_CnLUfA_@pB{AxH}@rE]jBKb@oAtGQx@i@nCId@a@pBIf@G^Ox@Ij@M|@Ip@Ir@Gn@Gt@Ep@?BCf@Er@?DC^A`@At@Az@?d@Al@?xAApD?dE?^?rE?N?bG?F@dF?~C?`D@tC?@?lE?nE?fA?fD?dH?nC?xC?|C?R?bE?j@?r@?X?lA?TA\\?X?^Af@Af@Cf@Cp@GhA?FIbAGv@Ix@Kz@AJGh@AFIf@AHId@Kr@Ml@Ml@Id@GPI^U|@YbAOb@M^M^KZMXWr@}@vBk@xA[v@i@rAIRa@bAwAjDs@dBq@`BcAdCw@nBm@zA_@|@Sh@aC|FcAfCu@hBsAdDiAnCaAbC]z@a@`ASh@]v@kAxCKTIRg@pAA@c@nAO^Qh@Uv@Oh@Qp@CHK^CLIXEREPU`AI^Id@Id@GXETCPG^Kn@Kn@?DIj@AJIj@It@Ix@Ej@Eb@CXC\\Cd@AJEl@Cd@?RATC\\?LE`AA^?XAVAfAAdBAjA?BAvDApBA`A?r@CnEM~XAzCAt@?z@A~A?r@Ad@?L?r@Ar@?r@?r@AfDAf@?bA?`@Ax@?~@?xE?h@?`@AnA?h@EtJ?h@A~@?r@AzCAdA?n@@bABhCD`ABt@JtABZDh@Ft@TvBP`BD`@v@lHV|B^jDZpCZzCJz@@V@R@R@X?@?`@BlC@`CBjF@rA?`ACrAG|AKnAGb@O|@k@xCShAo@`Dq@lDId@qArGw@~DgAxF]~AUz@Yz@eA|Bi@`AW^Y\\UVWTg@`@OLu@f@wGdEwArAs@x@]j@y@xAi@pA]dA]xA]fBOjAIdAG|AGbEHp_@@vH@zCBjJ@nE@pEBjJ@zC?tBA`DCpAEr@Gp@QtACNId@S`A]vAi@~Ai@nAo@fA}@lA_C`CmAdAa@`@eAdAe@h@c@j@_@n@g@~@a@`AUt@Wz@CLQt@Qt@Il@y@vIaBfQ{AhPkBpSaAjKy@`Ja@rEgAzLcBdRaB`RAHs@jHi@pDa@pBMh@YfA]jAi@`Bc@nAg@fAc@z@y@zAgAhBg@t@m@t@a@f@k@l@y@x@k@f@m@b@e@\\m@`@iCnAeBp@wAb@_Cp@mD`AqEnAsA`@aEdA{MjDgBd@eAXsFvAmBf@oCx@{@V{@XmBp@uAh@uAl@yAt@}@n@e@ZMHoA~@_@\\gA~@q@n@WTeAhAUX}@hASX[^_@d@k@|@g@v@o@bAo@hAa@x@_@r@ABWj@_@z@a@dA[z@eBjFGNcEzMq@tBuAlEY`ASv@UhAS`AMdAIr@En@IvAGvAADq@`Ti@nPe@dOCz@CbA?nA?r@?~C@jEFtMLvUDxHHxP@`CAhACz@GbAC`@IbAKhAGd@_@tCi@~De@vDm@tEe@rDKp@iAnIWlBM|@YhDEl@Cr@Ax@?T?TD~BDdAHp@Ff@Jn@Ll@Pv@XdAtBtHnB~G`@jBP~@TzANtAJxABtABt@H~CBbBLbGNpF@PDl@?BFn@N~@BNRdADXDRPv@Pf@Xv@j@bAFHHNJPf@r@\\b@|@~@nDvD`BlB`AhAl@x@\\f@d@~@f@pA^nA\\fBPrAN~ADf@BXBdB@tBCnA?TArGAfDExSC`L?r@CbGAzCAvHClJAzCEvP?BC|PIvZCtMExJ?d@?zC@h@?nF@dD?TAnC?rBAtDAlACvEA|F?NAzAA`D?bFAfI?zH?p@?lRAnJ?hMCNAR?ZAf@Cz@ErAErAGlBEhAA\\ExAG`BCzAAr@ALAbAA`AAp@?lBA~G?zD@|A?bI@pEA~D?rA?v@?`FA~B?pE?dE?H?nE?vJAlH?fC?nDAhDA~D?t@AhE?|C?tB?r@@bE@rC?xFApy@?tMAxU?zC?zC?fE@lIA~@?z@?|B?zDAfC?tAAvJ?zD?zB?vIAjDAx@A|@AbACz@Ct@A^AZEx@G|@Gz@Ix@Iz@QzAKt@O~@Ox@EZMn@GZKb@On@G\\IVMh@ELUv@Sp@Wx@Wn@Un@M\\Uj@O\\EJQ^u@zA_@p@[f@QXQXGJORm@|@_@f@QROPQRSTMNCBKJOPQNUTURIFQNQNi@^e@\\KHi@Zc@Vg@VQJWJQHQHg@RQHC@ODSHWFQF{@T_@Ha@Jg@Hi@J{@Hm@Fe@Bi@BY@g@@W?U@{@?i@?k@?K@iA?eA?M?mB@w@@aA@iB@yDBU?sG@I?sB?E?eF@g@A_E@yJ?iF?gA?_H?uI?yA?sTAyH?cGAmG?}@?aF?sD@c@?_H?aE?_CAgA?wDAwA?_C?kF@wB@y@?aA?iA?uECuBAaDCwCAwBA{@?kE?qA?uB@uF?wJ?iJ?gH?}CAeA?{AAyBAkCAiGAe@?}H?cS@cF@yHAkFAgA?qB?]?qD?gA?cD@kB@{B@o@?wFBgGBk@@m@?qCB{@@eABiA@K@cCFkBDeABqCHsBFsCFeGPeEHiDDoB@gG@gD?kH?sCA_ECo@?yHEuECaBAkECqFAqECqGC_H?iJ?}F?iE?Y?yC?}A@i@?s@Ac@ASAG?OAi@EMAYC]E]Gi@Iy@Sm@Oe@Qi@Qg@Si@Wc@Sg@[w@e@g@]g@a@_@[c@a@a@_@c@e@kAuAw@_AuBoC}BwCCCmCoD{CyDo@u@k@m@c@c@e@c@s@m@UOKGg@_@UOSMc@YQKYMg@WMG{@_@g@Si@Qm@Qq@O_@Ii@Kc@GCAi@Gg@Ek@Ek@Cg@Ay@?cAAmA?o@?u@@e@@eA@a@@}@@k@?g@@c@?y@?gBCu@A]?}@?aA@sA@mB@G?aB@oB?mA?wA?_AA_AA}@A{@EcAE{@Gc@CGAi@Eg@Es@Io@ImASi@IkAUKCoAUkA[oA]g@O_AYo@S]Me@Q{Am@KEc@Sc@Qu@_@_By@SKaB}@wAy@c@Yk@_@e@]mA{@o@g@kCwB}AuA}BsBmAiAs@o@eDyCqCgCgC_CuBmByCmC{AuAkAeAqAkAqDgDgAaAwEgEoEaEa@_@u@m@k@e@eAs@e@[cAi@g@Ug@W_A_@i@Qc@Oi@Mg@Mk@MuAUo@Iy@KiBS{H{@_CUeD]KA_Ec@}AQ{@IkBS{C[_@EkC[iAMuBScCYc@EA?cAKk@Ei@CWAU?a@AW@W?S@a@BS@YBk@Fc@Hk@Le@Jo@R_@Lc@NKFc@R_@Pu@b@]Te@\\UPYTUP[Zc@b@c@f@e@h@Y^{@lAABkAbBq@`ACDmAhB{BbDeFjHaCdDgH|Ju@bAqFvHy@jAaGlImBnC]d@}@nAiAbB_@j@QX[f@OXy@tAk@jAWh@i@hAe@fAKVYr@Wn@Wt@KVKZSn@IXK\\_@jA?@Oj@c@|Aa@xAOl@q@fCoApEy@`DOl@k@vBU`AQl@Sx@m@|BCLK`@[nAe@dB?@q@dCSp@U~@]lAIX}@dDy@`DiB~GCJeA`EeAzDGTg@pB]pAi@nBU|@YfAq@dC{@dD{@`DeA|D]pAg@jB[rASv@Ov@GZOv@Mz@Mv@Kx@E\\Iz@E\\C^Iz@Ex@G`ACv@A\\Ab@A^AXA`A?V?b@?`A?V?^@^?^BtBBbCBtB@`A?f@?lAAxACx@C~@Ez@G`ACXIz@Ix@Kz@Kx@E\\G\\Mx@S|@WnAW`AEN]nA_AbDi@fBm@lBaA~C_@lA_AvC{@dCw@|Bm@dBm@fBw@`CcA~Ca@nAc@nAa@pAwA~E}AjF}AjFmAfEaCdI}D`N{F|RaFzPkBlGe@`BwCxJoBtGkBfGcBdF}FhPcCnGaDpI[r@Sh@u@fBk@pAqCtGeAdC}BdFUh@s@fBUh@kBtEuAbDUh@Yr@}@pBuBhFi@xAYz@Un@o@tBiAbECJi@|BmAbGaA|E_@lBk@vCm@tCeBnJ_A`Fu@xDu@nDmAdGcB~I{@hEm@nC_@hBMn@GZgBnIgBhHABiBpGwGlUwE~O}AhF}AnFwAzE[lAMd@AFw@pDW~ASxAMjAEXQbBOtBKtBGtBCrACxA@rA@xABrBN|FLpFVvJb@`Pf@tQPxG@^\\~KTbITtKBx@JzGBdDDdG@zF@r@Jd]?T?dJBhIBjEDjCDdC@l@Bv@FfBJtC@XP~CVjDV`DLrAXbCNrA`@nCb@hCf@pCBHv@rDf@nBVbATz@bAhDx@jCh@~APb@Zz@hArCLXjB|DXf@`@n@l@x@Z^h@h@b@b@FD\\X\\VtAv@p@XdA^l@Ll@Jn@DnAD^?b@?`AEjAErEUz@GhH]zAI`BID?v@E~CQd@Cr@Gj@KZGB?b@Mf@Q^OlB_AfDgBr@a@JD@?LAHBHBFDDHLRNXHJf@`BRl@FLJZBDDFLLtBjGh@`B\\bAbA|C^jA`Pve@hBpFt@|B`@lAVt@t@|BHTRj@J\\r@pBv@~BnB~FlDjK|FdQ|@lCpEzMlB|F~CbJVv@zAvEzDfLnAvDp@pB|I~WtEbNVx@Z|@Tr@Pd@t@xB\\dA^jAp@vBX~@xAjEbAzC~@fC^dAZ`APl@"
                     },
                     "start_location" : {
                        "lat" : 46.3769284,
                        "lng" : -81.347385
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 339
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 46.522362,
                        "lng" : -84.2798272
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eS Market St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ma}zGdgkaOYTWVm@h@gA`AED[XSVQVQV[|@CLI^I\\Kp@Gx@?BCf@?n@BbA"
                     },
                     "start_location" : {
                        "lat" : 46.5207121,
                        "lng" : -84.27651059999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.5 km",
                        "value" : 3451
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 326
                     },
                     "end_location" : {
                        "lat" : 46.5217845,
                        "lng" : -84.32487639999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eMcNabb St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "wk}zG|{kaOl@fJNvBJrABh@Bj@Bh@@Z?T@^?t@@x@?`A?`E?~E?n@?fC?f@?Z?Z?r@@zMAtD?lA?XA|C?fB?@?`@@rE?zC@xH?v@@~G?pK@dD@xB@`B@|J@~H?hC?rBDxG?tB?nL?xB?r@@xH?bG?lDAfEC~C?fAAd@?p@?Z?tA?nC?xABxE?zA?lCB`C@pG"
                     },
                     "start_location" : {
                        "lat" : 46.522362,
                        "lng" : -84.2798272
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1738
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 171
                     },
                     "end_location" : {
                        "lat" : 46.5246253,
                        "lng" : -84.34626249999999
                     },
                     "html_instructions" : "\u003cb\u003eMcNabb St\u003c/b\u003e turns \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eSt Georges Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ch}zGnutaOCNAF?HCPENCNENENEJEHELOPOLOP_BvAEDQNUXOPKRMRKTMVKVKZIXIXGXEVIh@Gd@AVA\\A`@AjA@fC?|C?fB?vAD~F?pA@zCD~FB~FDpFD|C?TALALIb@I^Mv@ETCTCPCPAXYfEYzFc@lGWrEItA]rF"
                     },
                     "start_location" : {
                        "lat" : 46.5217845,
                        "lng" : -84.32487639999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 610
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 57
                     },
                     "end_location" : {
                        "lat" : 46.5192484,
                        "lng" : -84.3476694
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHuron St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}y}zGb{xaOtEr@t@FhALtEl@~Cb@D@DBF@F@BB@BFFDFDDFDHBJB^FpARlAPrAX"
                     },
                     "start_location" : {
                        "lat" : 46.5246253,
                        "lng" : -84.34626249999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 273
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 46.5193719,
                        "lng" : -84.3509591
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ix|zG|cyaOc@zA]~@Ox@I~@Ev@AH@\\@J?Fd@nBLn@RfB"
                     },
                     "start_location" : {
                        "lat" : 46.5192484,
                        "lng" : -84.3476694
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1522
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 121
                     },
                     "end_location" : {
                        "lat" : 46.5084538,
                        "lng" : -84.3607543
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSault Ste Marie International Bridge\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering the United States of America (Michigan)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "ay|zGnxyaO?v@Ap@@p@Bb@B`@D\\F\\FZF\\J^FV?BJ^Rj@Nh@@?L`@@B^~@`@~@`@v@b@x@LRXd@?@X`@HJLRVZb@h@f@h@PR^\\b@^t@n@TRXTnB`Bv@j@j@\\VNXNDBf@Tj@T\\LTFb@LTHJD`@N\\LB@b@JDBzAb@JDHBJDb@J`@L^L@?jCx@bF~Av@VhCv@rBl@t@T"
                     },
                     "start_location" : {
                        "lat" : 46.5193719,
                        "lng" : -84.3509591
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1484
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 120
                     },
                     "end_location" : {
                        "lat" : 46.4956703,
                        "lng" : -84.36616719999999
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eSault Ste Marie International Bridge\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ytzzGtu{aO|Bv@JBhA^~@X\\JbAZb@L`@N`@L`@Lb@L`@L@?^N`@LfBl@`@N`@Lb@N`@L`@NdA\\hA`@zAb@`@LdAXb@L`@LHBb@LzAb@pA\\XHF@nDx@jCn@b@J`@Jx@PpA\\b@JJBTDb@Jx@Vp@Vb@Pr@`@`@X^TfA~@"
                     },
                     "start_location" : {
                        "lat" : 46.5084538,
                        "lng" : -84.3607543
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 193
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 46.4945297,
                        "lng" : -84.36803159999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "}dxzGpw|aO@H@D@DFLFLDLLVFLNZt@`Bd@bA\\d@f@d@"
                     },
                     "start_location" : {
                        "lat" : 46.4956703,
                        "lng" : -84.36616719999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "75 m",
                        "value" : 75
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 46.4939713,
                        "lng" : -84.3683142
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eI-75 S\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "y}wzGdc}aOR?FCHCDCFGd@d@Td@"
                     },
                     "start_location" : {
                        "lat" : 46.4945297,
                        "lng" : -84.36803159999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13.4 km",
                        "value" : 13361
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 501
                     },
                     "end_location" : {
                        "lat" : 46.379949,
                        "lng" : -84.41283419999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eI-75 S\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "izwzG|d}aOt@jAtA~AnA|AX`@\\b@\\b@Zb@zArB~@jAhAzApE`GrEdGfDjEd@r@|EnGXb@hCfDBBh@n@JL^b@h@l@TTj@l@l@j@p@n@VTf@b@ZXn@d@`At@nAz@f@Zv@d@vCzAbBv@`C|@bBh@rA\\zBd@rAVr@JpALpAL`@Br@DpAFlBBbDDxCBxABzCDrIHnAB|@?fLLnFFzAB|A@~GJP@^?bIF`IJvONrLLfHH~FHvCBbDFfIJzEPhCN|CTvAPfCZfC`@lB^r@LnAVnAZnAZhBh@nA\\~C|@hBj@hBh@bCr@hBh@bCt@xDhAzC|@fCr@dGhBpA`@lA^hBh@bCt@~C|@|C|@nA^xDhArErApEtAxDdAfGhBxShGtDhAbGdBnBl@vHzBfOlEtF`Bdh@jO`@LzTtGpSdG|JvCpF~AlDdAvHzBnDdAdAZ`@L~C~@n@RdAZVHHBrC~@zAj@f@P`CbAjCjAZP`@RdEvB`@RzBlAjDjB`@Tj@ZdFnCxBjAZPB@dClAxAr@lAh@r@Zp@VnAf@bBl@`AZb@Nl@RzCz@nBf@rAZd@J"
                     },
                     "start_location" : {
                        "lat" : 46.4939713,
                        "lng" : -84.3683142
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 735
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 46.3745381,
                        "lng" : -84.4174261
                     },
                     "html_instructions" : "Take exit \u003cb\u003e386\u003c/b\u003e toward \u003cb\u003eM-28 W\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "uqazGd{ebOXRnAZ|@PB@TFf@L`@LPFNDFBPHPFNFJFJFTNLHLJFDFDJHJJHHDDDFFFFFFHHHDF@@HLDFDF?@@@@@HLDFDFBFBDDFBDBHDHDHFLr@bBRb@bBbEJRJVJTDDBFBD@@BB@B@@DDBBBBBBB@@@DBDBB@DBD@B@@??@B?D@F@B?D@D?B?B?D?F?N?B?tAA"
                     },
                     "start_location" : {
                        "lat" : 46.379949,
                        "lng" : -84.41283419999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "177 km",
                        "value" : 177250
                     },
                     "duration" : {
                        "text" : "1 hour 45 mins",
                        "value" : 6274
                     },
                     "end_location" : {
                        "lat" : 46.3933062,
                        "lng" : -86.6483738
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eM-28 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{o`zG|wfbO@fO?r@@lE@dD?pB@vB@rHBlJ?~@?jH?F?fB?hBKh\\Ar@ItZOxb@?fBEvLKh\\CrGA~ECvHAhBErMIpWCbGAxD?jAAr@AzCAlHCnCC~EAvEAr@E`LEjJCvHCpEGfOCdGAfBEvHAdDIrPAxCArBCxHEvH?r@ArBEvLCrFGtMChKAhK@rE?xD?zH@tL@pKA`E@|C@zM?xM?N@lM@~H?zH@`TBb]Bda@?dG?fB?r@@|P@~K@`L?r@?fB?bGBhY?lJ@~K@lJ@|P?fBBlb@@nJ?r@@|P?hD@hD?zC?lK?fB?pC?fQ?r@ApCA`I?r@CfICdM?HE|MAdHA~CExIA~FEtMEbTAr@Ij\\ItZIxXM|j@Qnr@C`KCbP?lN?r@?|C@lQ?tKD|q@?nC@nUBh\\?jE@`Q?r@Bde@@tH?pF@vI@fQ?zP@dT@dL@bG@jPBxe@?lD?lH@nU@~K?bC@tA?t@@~@@z@Bv@D|@DhAFxABl@Bn@Dn@Df@LdBNdB?DPlBZjCxAbMhD|Y`AxIbB|N`@pDp@xFx@lHx@jHtIzu@x@lH|A`NlE|_@ZtCtB|Q`AvID\\tBxQlApKtAtLbA~IfAhJ^nD`@nD|Dp]`@nDbA~I~AhNBPzBbSb@rDh@zErAnLHp@\\rCPfB\\tCh@|ENlA^bDb@zD|BbSr@lGJfAFh@Fr@JhAH`AFx@@VB\\FhA@PHvADbBDvABhA@l@@|@BvB?`BB~IBxXB~U@l@BrP?dD@nD?tA?r@@jGB`L?vD@~B?r@?r@@lL@bE?rB@vF@jH@hD?r@@fBBxLB~R?n@@hHBtJJnq@@vHHbf@D`[Fnb@DdT?\\@dG@nE@vH?hB?rDDlZBhG@lF@hB@rC@hN@rI@nG@bC?dA@hB?z@@x@BdA@`ADxAD|@Bv@Dp@Br@F|@Dv@?FDn@Fz@Fl@?FFh@@FFt@Ht@Hx@Fh@Ff@Ff@Hl@Hn@Lz@BHJv@Lt@RjANt@Jh@F\\TbAPx@Pt@VhAt@nCx@tCn@rBx@pCrEpO@DrBdH~ClKnBtGV|@\\lAzBpH~BdIxJn\\t@hCbBxF|@~C\\jAl@xBVbAd@vBb@vBRbAZjBPfAXjBJx@L|@XxBHz@Fj@Hz@Fv@LbBDp@HpAFzAFrABh@?HBr@Bp@BnA@fA@r@@lA?|@?hA?r@?tICtX?`@CdTCzPAxLCfNAzP?rICdQAxGA|I?NAr@CbG?NCjCCbC?rDAr@?fBA|C?z@@~A?r@DtPAhOA`L?|CC`P?nDCtMChPA`JInZA~KErOK|j@?r@A|CApGAbHA|EE|SAvEAdDG|]CtIEhWAvK@b@?fB?zC?R@fC@xN?vB?fA@tC?bAB~@?H@h@@l@Bl@@n@HxA@XB\\B^NtBFh@PbBBTBRBVJp@RtABHPhA`@lBz@xDPt@VfADNDLBJDJBJBJBHFNNb@L^JXJVJVHRDHDJFNT`@JT\\p@LVNVbBzCjExHlCrEdClE@BfF`J|GtLhOzWdChEpCdFLVLVf@dAf@lAN`@DJVp@Rj@Tn@j@jBJ\\HZPp@Pv@Rz@RbAJf@Hf@Lp@XdBJv@Hh@J`AJz@LxABd@BXBXBVF`ABl@@P@R@^?JBj@@^@n@?RD|C?p@?j@?p@?|@?R?^?h@ArC?xAA~@?h@?n@AvCCpVA|DC|PAvH?F?~S@xC?jCDvP@pG?F?~B?dBAjCKdQC`EChCInKExDCpD?`@AxCE~JAzI?tBAtFAvHAvIAvH?lBAp@?nEAnEAvHAxH?r@?nE?r@C~K?rC?FAxFA|GAxGBlPDnN?jA?r@BbL@`G@fB?l@?`D?r@@hO?r@@jJAjJ?r@AbI?h@@xC?dE?f@?jA?fBAn@@zG@xB?f@@ZBlBDtAFbCHfBBd@Df@LzB@JTfCFt@Hx@NpARfBNfAFh@F`@@FFZDTF\\N|@TlAlAhGLj@v@~DzClOLn@tA~Gx@|D|CxOLn@^fBbDvPlFfXj@rCjKvh@lDjQx@dErA|GnB~JLn@tHz_@@@dAnFdAhFf@~BRx@VhAZjAXdAz@xC`@rAh@bBVv@DNp@rBZdAdAlDfAjDRr@nA~DnJf[HVdDrKpCdJBHfF|PjAnDVv@J\\Pb@Tp@Zx@v@tBv@tBf@hAd@bAdBrD?@xD|HLR`GpLFN|A~C^v@Xn@dAdCn@jBFPh@|ARr@Nh@ZjAT~@Jb@BFNp@P~@TxATxAFh@Hn@Ff@Fj@Fp@BLB\\Dh@BV@VB^Fv@Bl@Dr@Bj@Bb@@^@l@@X@\\?r@?n@?zC?l@?bx@@p_@Dhv@@nR@pQ?vAArH?rDAj^Az]Cpl@?lWAfB?vH?`TAtIAvHArM?\\?jJAf\\?~E@pX@~KBhO?r@?~B@fKD~ZBbK@nJ@n@?FDj_@@|K@rR@pM@xU@fY@fE?vI?nI?xD?~K@fO?tM?`JBpO@hO@nE@rM?tG@|ZA`P?nFA|FA`IApC?jAElXKdn@Gle@CrY?~GAtQC~S?~CE`Z?zBCfOC|PCjMCfUAtZAnR?vHAxE@jF?nE@nP?`A@zC@~KB~KFnXHf\\BlJHf\\B~KHpU?|_@?lV@~X?|P?|@?zA?zFAnF?|B?jE?tC?hO?r@?fO?nE?vHA|C?r@?nE?jJ?r@?nR?r@?lJ?r@?vD?vC?~BArCA~AC~AGrBGpBC\\Cb@C\\CXIt@QtASrAMv@S~@I\\Op@Qx@Sz@GRK`@Y|@e@rAa@dA[t@Wf@OX]r@]h@]j@W^k@x@ABo@z@i@n@a@b@aAdAaC|BuBrBy@v@QPOPKLMLCFm@t@o@z@k@z@_@l@[f@]n@CBMV_@v@Uf@M\\Sj@Yt@Ob@M^]hA_@bBUdAMl@Mn@Ot@Kv@Kr@K`AKnAMrA?FInAG~@C~@C`AAv@AjA@h@?N?L?Z@Z@|@Bn@Bx@D|@FbAFt@Dh@BV@JBZFj@F`@Ff@Hf@RjAPfAhAbHL|@BNBN?DLbADb@B\\Fj@HdAFfADn@@b@Bh@@n@@tA?pA@fO?zC@vB?vH@fG?nBE|@?@?@?@?@AhBAfH?r@AxD@bT?@?@?@?@?BDZ?fB@dJ?dGBxb@@tF@lI?zD@rM?r@?vH?vHA`LA~KCjk@C~Q?xCA`DAfHA~MBdQBvH@dGDvMFjO@xABhDBvHJrV@`C?r@JxT@rZ?xH?vI?ln@?xH?nR?fP?r@?r@?da@?bL?lF@zP@xHC~MCz@Ct@Cv@ATAPCh@Ed@Ef@It@Gf@CVG^CTERKp@UdAGXMh@Oh@CLOh@IVIVMb@Qb@Sh@?@O^MXIROXQ\\_@r@]j@W^W^W^WZ[^QPYZy@p@y@r@mA`AoA~@g@^sElDuYvT_@V{ErD]XyGdF}C|ByFlEcJbHqTrP{DxCyErDwC|BoUpQi@d@]Za@`@WXa@d@CBk@x@s@jAe@~@KTSd@]x@M\\K\\Sr@St@CHOv@Ox@Mv@G^Gh@E`@E\\Ed@Cd@KhBCfBGjEAlHArEAvBAtKClJCvLCnQExUCjJA`L?tAE|WAfDAxFCrEClXIn_@A~EEx^AnNCvN?nAEnVAvHAxD?T@zBBrA@r@@PFfADp@Jz@Hv@Jp@Jp@Lh@Jf@Rv@Jf@Ld@Rl@`@jA^|@xA~Dr@pBhAzCh@tATr@`@tALb@ZlANt@DPRfAZfBHh@Fj@LtALlBH`B?RD|ABjB?~CBnR@pTBtZ?lJ@~K@dT@fBDvX?vE@nE@vH?r@@hL@jI@r@?`E@`A?t@?zC@fO?fD@tK@jJ@bG?pE@bG@jJ@|A?vA?r@@nE?fD?|A@nEB|J?`@BnE@pE@bG@fC@dC?zC?@@zC?~A?z@BbIHt]BhKDpOD~THr]DhRFbZ@fE@rN?lGEzFCrDKxEQnFMxCGvA_@`HoBt[w@bM_A|Og@xHIpAKpA]hEo@fH[bDS`BCXc@dDS|Ac@~C[rBUtAWzA[jBa@|BQ~@m@zC{@vEo@bDa@xB]dBm@`D_@pBoArGa@vBw@`Eu@~D_@rBQbAYjBWlBUpBSpBEb@O`BIdAGlAG`AKbBEbACn@EvACfAEtAA`BAjA?xA?~@?h@@J?`@@rABlABbABrAFrAD`ALbD^`JJlBZtHZnHz@rSj@lMTdF^nJ^|HDtAHfBv@jRFdAFxADdAHdBF~ADlABjA@j@@p@@tAAv@Al@An@Ap@Cl@E`AA`@Ej@ATEd@Ef@KfAIn@?DIh@ObAGd@CJShAKf@SfAa@~Ai@fBO`@Qf@M^M\\IPUl@O\\e@~@cC`FmCnFi@fAWd@}@hBiA`Ci@jAUj@M^Ob@Mb@Of@K`@GTKd@IZKn@O~@Gb@Gj@Gd@C^Gl@Cb@EfAAb@A^Ap@?n@?z@@r@@b@@n@BhBF|CHtD@j@JdFDvCH~DL~GDzADdBDjC@pA@zA?^@nEAbDAdD?nB?nF?`@AhD?dB?`C?p@AnI@|A?l@@v@@f@@r@@HBlAH~ADlAXtEBh@JfBNbCL`CD`ABt@BxA@j@@xA@tA?~BAjLCxOClZExg@Cb]AnUCpF?nCCt]Cn\\AlMAnRCf_@AvIA|TCfUAvK@|@?rCArOCrV?pOAxL?`BAfG?zN?j@AnG?f@CbP?~IAzG?lEAzK?xHA`K?fM?nC?rEGraAMndCA`WGlkACxX?dc@?tW?fMArIApL?rI?hACddAAnSMbeBK~_A?pCGxq@Efg@ChUQfpBE|k@K~qAExb@ClXCpMAfQEbf@ChVGxt@Gbj@Kh|@C`KExf@?vISh|AAlMGji@Ev\\Ijx@WzfCAjNChUEfd@Ep\\AnOYpaCEpZClUCnSApF?r@A~KK~q@C~NIbs@Ghi@Iji@?nE?r@Gld@Izl@?pA?vCA|B?bB?NAvB?tB?rAAnA?dAAxC?rBA|B?@?jAClBAtAA|@ExAEtBGzBIrCAPMvDGhBARGnBIfCKhCI`CCp@Cp@Al@EbBGzBEnB?\\EfDCfFCfMA~CAhC?|DA|DA|D?dDElPAjFG~YAvG?p@AvCA~EAvEAbBChE?BChBA`@EhBOjDGdAItAGz@AHKnAKdAK`AKhAE`@MdAAFM|@M`AOdAKn@UnAQdAOt@Q|@Ov@WbAc@fBw@xC]lAQh@ITIXYx@Wv@[x@_@bAg@tAm@|Ay@zBw@rBy@xBoAfDoA~CSl@O^i@rASj@O\\qEvL}GrQsAlDiBzEuDzJSh@_BdEwF`OoGxPo@bBMXyFfO{A|DwIlUe@nAaHvQeAlCEJ}@`Cg@rAy@zBMZWr@yGhQeExKkEfLeArCyC|HcDtIgBtEQf@}AbEQf@Wv@g@hBCHU~@_@~A]bBO|@Ij@Id@UjBUxBMbBEf@GpAGvAEnBEhEElGIlKCzBEtGGrI?fABnB@t@?~@EjGIzHExEAdDE`FEfHA\\ElGCbEEdFAz@EzF?r@CrCGjGA~ACxEAvAGjHCdGGpIG`G?v@AfBAbAEjEA`AAt@C`AGnBEnAOpCI`BEf@Gx@KpAWbCQ~AUlBOdAYjBe@nCa@tBMl@O|@Kj@aAdFgAzFqAdH_@rB[bB[dBSjAMz@Mz@Kp@Gd@CTEZMbAIt@Ir@MnAEf@MvAW|CYvDSbCSnCIbAEj@_@rE?F]bEEl@Gp@CVKxA]pE[~Dm@lHKnASbCSbCu@nJIjAMdBu@dJAL_AfLShCcAvLYfDgC~ZQzBKnAMjAKx@EXAJId@If@Kn@Kj@Kl@Kh@Mj@Kh@K`@I^Uz@Mh@Md@Ut@ITOb@Sj@Ob@M^Qd@KRO`@Sd@Q`@Wh@Q`@U`@Ud@QZKRGJSZOXS^S^S\\Q\\Wb@Yd@Wd@A@U^Yd@W`@_@d@[`@GHSVCB]^g@l@k@h@g@b@c@`@_@Xo@d@g@\\e@Zi@Vi@XSHM?A?A?MFm@To@Tu@VoA^i@LcA\\kA\\"
                     },
                     "start_location" : {
                        "lat" : 46.3745381,
                        "lng" : -84.4174261
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "25.0 km",
                        "value" : 25002
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 968
                     },
                     "end_location" : {
                        "lat" : 46.3331181,
                        "lng" : -86.9287827
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eM-94 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eedzGhozoOBTN^DFBDBBFBHBP@dBCd@CZATC^Eh@Gb@E\\Eh@Ib@GXCZEZEV?^?VBRDRDXJPFTJNHLHNLPNRR@@FHBBHJPZPZ@DLZVn@DNHXDVFZ@J@FBLBT?DDb@L`BTjDFr@RnCPlBFr@Dj@b@nEJ~@n@tGz@`JBLf@nFPfBbA`Kn@jGn@pG`AbKFl@`ApJZzCXbDb@bEVbCVtBPrALz@RxAXpBn@pEt@nFfA`INfADj@Fn@H~@DhADz@Bv@@fA?bA?nBAdCATAxA?|A@lA@jABhADfAPnCNbCTlDTnD?HPbCV|CLbAJz@TdBJp@Jn@RfATlAT`AVdALl@`@xAd@zAf@zAf@rAf@nAVj@P^b@|@^t@^p@p@hAz@pAh@v@BBf@p@`AjAtAvA`D`Dd@f@d@d@bAbAdAdAbBbBt@t@tArA|@~@DDdCfCFFpDpDfAfAl@l@vAzA\\Zz@|@xAxApBlBzAzAl@n@tGtGpDpDzD|DdDdDvAvAbJzI^`@lFjFlEnEvBtBtNtNfEdEFFpEhEl@l@pBbBtAfAx@r@p@h@NJpBxAj@`@bAr@zCrB~DjCPLlGdE`@V|DjChCdB~JzG~GrEbXnQpA|@TNx@h@lBlAfBlAtBzA`Ax@`@\\f@d@j@h@~@dAHHZ^BDj@r@h@t@PXPVt@jAj@bAb@x@v@`Bz@nBj@xAVr@ZbA\\dAXdAT~@t@`Dd@fCXjBNjANjALdAHfAFn@Dj@Bd@Dh@FlAFnABlABjA@rA@pA?b@?bA@fD?|AB`K@pA?r@BjJ?L?d@@jE@hG?F@j@?lCBpG?P?`@@xH?H?h@BvH?r@?Z@lH@z[@zW?pA@xM?lD?xD?hA?r@?bG@|G?zB?jH?fA?ZAHCFGLC\\Ab@?|A?bB?bG?dA?bM?bQ?j@?bC?lN?fE?nE?jJ?bH?fB?nR?lJ?bG?zC?zC?jb@?rG?jJ?r@?jJAjJ@pE?xD?pD?r@@xB?vCEzBAPGtACj@IhAOjAa@nCS`AUxAQxAOzACf@E`@ANE|@ElACt@ClA?bA?n@?Z@r@?FBpBHv@Dz@Fr@Dl@Hv@Jx@Hp@Lx@BLL|@RrAJn@Hf@Lr@Hj@Jt@Hn@NfAHx@Hx@Hz@Fn@Df@Bd@B`@Bb@B^@Z@XB`@@\\@d@@f@@b@@t@@d@?bA?|@?`@?Z?^A\\A|@C~@Ab@A`@EhAEnAEfACpAClAC~A?vBBhBDzCBbBBzA?LDdB@t@@bA@b@HrFDtB?@FpDFrDFtCBnA@l@BzAD~BBzA?b@BbA@n@BtBDtB@Z@t@FdEBnB@n@DpB@rA@nA?x@?|@AlAClAAd@?BCb@EjACh@Cd@ALG`AIbAARCZCTI|@Gp@Gr@I|@IbAEh@Gn@CTAPGl@Gl@Ej@Ej@Gl@Cd@C`@Cb@Cf@C^Cn@A`@C^?`@A^A^Ah@?DAl@?D?~AAfC?Z?r@?|@?dC?J?r@?`D?zBAhL?nEAjJ?`D?l@?vI?tO?`EAjJ?r@?lJ?nE?nE?rK?zCAtC?zC?dT?fBAr@?~RCnMEnb@A~CCvW?x@Ev]ArMCzP"
                     },
                     "start_location" : {
                        "lat" : 46.3933062,
                        "lng" : -86.6483738
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1605
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 46.3475555,
                        "lng" : -86.92888809999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRock River Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_mxyGzgqqO}BBgB?eD@iD@G?uA?c@?gA?c@?aI@uH@}@@_H@gF@qC?qC@gA?yF?oB?oC@"
                     },
                     "start_location" : {
                        "lat" : 46.3331181,
                        "lng" : -86.9287827
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22.6 km",
                        "value" : 22624
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 867
                     },
                     "end_location" : {
                        "lat" : 46.347764,
                        "lng" : -87.21824719999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eM-94 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMunising Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow M-94 W\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gg{yGphqqO?pQAfO?lJ?zCAnE?r@?r@?r@?r@?dG?r@AvJ?xJA`KAb@?^Aj@CZARAPATANER?DIf@Mt@U~@]dAWj@MVMRc@n@IJs@x@{@bA}OvQaBlBGHY`@GFaA|A]l@g@~@[r@GL_@~@CDg@vASn@Oh@?@Uz@e@pBOz@Kd@G^EXM`AQ~AGp@MbBAZInAEbC?hBCbG?hM?r@?r@?zC?pE?fB?zP?fF?tM@fB@~K?vH?nE@zC?zD?zQBbN?X@~E?`E@`FA|D@`KBrD@dBHpCH|BHxADj@R~CN~AFn@`@jEd@hFj@pGp@nHh@|FJdAd@hFFp@tBdUFr@NbBr@tHbB`Rz@jJN`B|@|Jt@hIfAnLd@bFVxC|BzVjCdYzAhPh@hG^lEHtAHpA?HFpAHlBDhBBrB@DBpE?pD@hAAvJ?rM?tA?~U?lL?jJ?`L?bN?l]?jEAtT?|C@bDAp_@?xUC``@?tN?~OArH?lL?j@AdG?nR?b@?dKArG?~D?dFApG?vA?lG?bFA`P?`F?|A?lA?pF?nB?zE@vI?r@?hB?lG?nC?tF?vC?zC?rA?zD?fG@|N?xU@b[?pE?bT@tZ?vN@hJAbOCz\\?rB?dEAjPAfH?NAtZ?zCAzD?dS?JAf@AhOAdTAlS?bCAbRAd@?jM?bGAr@?bB?`DAxU?DAdCAnL?r@?xKAF?nEAdTAjJAvT?`@?fOCrP?^?fA?F?nAClDBxC"
                     },
                     "start_location" : {
                        "lat" : 46.3475555,
                        "lng" : -86.92888809999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "15.5 km",
                        "value" : 15460
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 587
                     },
                     "end_location" : {
                        "lat" : 46.46344029999999,
                        "lng" : -87.31657140000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-41 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oh{yG`yisOoDfAw@XcBh@ONcF|AoA`@sC|@m@P{@VeBl@{@Xk@R_@NeA`@qAf@gCdAa@Na@PyMlFqGhCa@PeBp@a@PEBaC~@[BkA`@a@Ny@Z_A`@oBv@kDvAq@XQFcBt@KDC@ILSHyElBwD|AkBt@eBr@a@P_@LkBv@u@Xk@Tq@XkCdAeFrBoDxAeDpAe@Ta@Nk@ViG`CiBr@kBv@sAn@u@^e@Vy@d@q@b@g@\\g@ZUP[TaAr@_Av@QNWRc@`@c@b@_@\\iBbBiBhBq@n@C@o@n@_B|AuCpCIHmBhB}AxAYX]ZSRm@h@e@f@k@d@]ZC@i@b@SLMJ[Ta@VUL]TKFUJ]Re@Ti@Vm@Tm@T[Lo@Ri@L[Ja@H[Hc@Hc@HYDSB]Fa@Be@DcAF]B[@[?mA@kB@M?eB@uC@_HB_HBkKF}KDmA@sD@aBBk@@gABiCF]@_AB{@Dy@Bc@Bu@Dc@Dq@Fi@FWDo@Ji@Jo@L}@Vm@Pc@Lg@Ru@Zq@X_@P]P]RMFID_@TSL[TUNKFGD_@XYT[Va@Zg@d@a@`@ON[\\A?s@x@]`@ABo@v@c@j@MN]h@SXq@~@eAzAw@hAoAhBEF_AvAk@z@OTm@~@oB`DcA`Bs@lA]j@cBnCoGlKW`@a@n@{AdCoBdDoJxO_CxDeBrCYb@qAzBQVkAlB_A|A_A|Aq@hAa@n@u@lAe@t@ABs@bAu@fACBk@v@g@n@WX_@b@o@t@y@z@a@`@c@b@o@j@SPcAx@k@d@sA`A_@Xs@b@WNSLKF]RuAx@MFa@RWLkAj@a@Pa@RMF_Bt@yAt@sFjC}At@a@R_Ab@GD[Ne@V[Re@XWPWPYRc@ZYVg@`@a@\\_@\\_@`@q@r@STWZe@j@a@j@_@d@g@x@u@lAOTw@tAmAvBGLOXqA|Bg@~@Wf@i@`AqAzBu@tA_DlFUb@wBlD{@xAo@bAi@|@k@z@u@jAu@jAi@z@}@tAg@x@uAtBu@hAU^KNOXQT]j@k@`A{AhCk@bAy@vAg@bAYl@OXc@z@Yl@Yj@Yp@[p@Sb@Sd@iAlC]v@]x@IRaAzBu@fBmClGUh@Wl@]x@_@|@[r@c@hAIPe@hA}@rB]v@Wl@_@r@e@|@u@rAm@bAMR]f@[f@e@t@KLq@`ACB]f@yAhBeCnCqApAmAlAo@l@KJQPwAxAg@f@o@r@CBYXCBy@|@_@b@i@n@EDe@h@WZQRWZa@h@[`@w@`Aw@fAsAfB_@h@e@p@o@`Ag@r@[d@e@t@oApBkAhBoB|CcCxD{AbCw@lAQVgAfBo@`AYb@wCvEaBjCaA|Am@~@c@r@yA|B{@tAu@jA]l@o@~@"
                     },
                     "start_location" : {
                        "lat" : 46.347764,
                        "lng" : -87.21824719999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "23.2 km",
                        "value" : 23156
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 1012
                     },
                     "end_location" : {
                        "lat" : 46.4996263,
                        "lng" : -87.60147289999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCo Rd 480\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "o{qzGp_}sOPLDHFLDL@FBL?hA?~D@zC?nB@tCBvH?r@@|C?r@@nE@xH@lJ?rE?`R?|L?fB@xH?bO?lA?zL?nP?vB?b@?t@?vB@b@?r@@zC@|C@zC@fB?@DxGBbGF~KBpE?jA@`BBdE@t@@pB?T@|CDzHDdLFhO?nA?vAAtG?r@AvI?T?r@AzC?l@?D?t@AdC?T?r@?r@AhFAvD?L?d@AxHAbGAdG?xDAtFA|C?n@?jCAfA?bB@dA@n@@v@@P@^FlAHlAJfANjANdAV`BVxANv@BNTzAf@pClApHhA|GRdADVLx@TrA@BJn@DVRfAJp@Jf@@HHp@Hj@Jx@Hz@JjAHfALbBJ|AVtDBTFr@@LBf@HjABVFp@HnANlBHrAHbAJnAHfAHjAHrAH~@B^HbADt@Fr@LbBDj@?FRjCJxABXFr@@NJtA@VBXFn@Dv@@JJnAFz@?HDr@?T@RBhCEdA?HGfAKvAWrBQ~@c@`B_AzCoAtEWz@wA`FIVc@`Bi@jBuFxRoCpJqArEqArE}@`DIZeApDsA|EUv@eAvDq@zBMb@iA~DAD}@bDgAtD_AfDiBlGkAdEqDjMm@rBUv@YbASv@_@nA]hA[`Aa@jAw@tBm@`BaBnEQf@kA~C_@~@M^Qb@u@rBITw@rBm@`B{@~B_AdC_@dAo@dBi@vAYv@CFM^[v@Yv@c@fAYz@q@fBoBnFkB`FeBvE}BlGwEpNsBhGkHpTQj@mDlKeA`D}AtEIRiAlDoAvDuBjGu@|Bc@pAg@|Ae@rAg@|Ay@bCQj@e@tASl@Qj@Qf@g@|A[`AsA|DWr@Up@Od@Qj@o@nB_@lAg@dBGXI`@WjAWrAU`BQpAK`AIz@aDl[u@nHOnAcA~JWtCUxBMhA]~CUdCo@~FO~Ak@hFO|AI`AGh@a@jEAFYlCg@|EIp@YvCk@rFSnBGn@MnAU|BOxAK`AIjACRGdAIzAGdAC`AA~@APA|AC`DAlWAtJ?nEAzI?vHAfHAvH?|CAzCAfI?jD?zC?hHArF?jAAxACnACt@E`AGp@Gx@Gf@CXMz@If@Mr@Qx@W`AkAnEi@pBw@tCoAxEMf@wB`IyArFgA|De@hBa@zAkAlEi@rB[hAa@~AS|@_@tAWbAi@rBc@lBc@fBOp@Mp@Ov@Ml@CRIj@Mp@QtAObAm@dEKt@m@`EU`BWbBm@zD]~BQhAYjBIf@aBbLc@|CiBfMADa@rC[vBEZe@`DStASzAYhBg@hDQjA_@bC[rBa@rCOdAOdA[xBMz@MjAALIv@G~@InACt@Av@Ct@?x@?v@@bABz@BbALtBFp@H|@ThBl@dEtAbJv@lF`@pCJr@v@jFNjAN~AFv@FlA?@B`A@fA?xAGfCCx@?|@A~@?j@?x@@h@?V@Z@^DrADtA@DDr@B`@J~Ax@`LRvCL~Ab@rGFlAHbBDhBFhCDjEFrG@r@?f@?JDlDB|C@`@Br@?b@HtBF~AH|AFdA?JHlAL`B"
                     },
                     "start_location" : {
                        "lat" : 46.46344029999999,
                        "lng" : -87.31657140000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 238
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 46.5015697,
                        "lng" : -87.602774
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eS Healy Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "u}xzGdttuOQLWNSLwAv@kAt@aDhB"
                     },
                     "start_location" : {
                        "lat" : 46.4996263,
                        "lng" : -87.60147289999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 418
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 46.5000073,
                        "lng" : -87.607744
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE Main St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yiyzGh|tuOjAlFTbAp@`Dl@lChAnFj@nC"
                     },
                     "start_location" : {
                        "lat" : 46.5015697,
                        "lng" : -87.602774
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 845
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 89
                     },
                     "end_location" : {
                        "lat" : 46.506769,
                        "lng" : -87.6127152
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 3rd cross street onto \u003cb\u003eN Teal Lake Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a`yzGj{uuOyA|@uAx@sAv@{Az@_B|@MHaAl@sAv@QHgAp@aAh@yAx@[ReA|@CDa@`@yApAcBxASTq@n@QNMLGDOJIDM@QD"
                     },
                     "start_location" : {
                        "lat" : 46.5000073,
                        "lng" : -87.607744
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.4 km",
                        "value" : 4369
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 206
                     },
                     "end_location" : {
                        "lat" : 46.5035353,
                        "lng" : -87.6659641
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-41 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Little Caesars Pizza (on the right in 4.2&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ijzzGnzvuOFj@Dt@?FBb@?@BdA@Z?X?X?h@ATA\\?FAVARCZC^En@Gj@Gt@MfAUbCqAfMEZo@pGMnAk@xF_@tD]hD[bDa@xDOfAOhAOhAGh@OhAOdAOz@Kp@SjA_@|B_@vBq@vDm@pDm@`DG^oAbH[fBYbBWxAId@AJCTGZGn@K`AEb@AFC^C\\Eh@Cf@?BA^CZ?XCl@?b@Ap@?b@?D?X?d@?b@Bj@@l@@f@Bh@Bb@Bd@Dt@Fn@Db@D`@Fb@D`@Hf@Jl@Hj@DVFVH^Hb@Rv@BNHTJ`@JZJZFVJVHTJ\\Vv@|AbEFRn@bBf@tARh@d@nAN`@v@vBn@fBTl@^dAHVJZX|@Ld@Ld@j@zB\\tATfATdAPz@F^Hh@XfB`AdHF`@Jz@\\bCx@`GHn@Hh@H`@TtAF^FXF\\Hb@Lj@Np@Lf@Lj@FTJ`@FVRv@^zAZjAJb@XdAHZT~@HXBJR~@FXH\\@FNt@Jh@DRHd@PbA@HL|@Hn@Hf@Fp@FvB"
                     },
                     "start_location" : {
                        "lat" : 46.506769,
                        "lng" : -87.6127152
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "65.8 km",
                        "value" : 65797
                     },
                     "duration" : {
                        "text" : "42 mins",
                        "value" : 2531
                     },
                     "end_location" : {
                        "lat" : 46.5852838,
                        "lng" : -88.4722149
                     },
                     "html_instructions" : "At the traffic circle, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eUS-41 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Anytime Fitness (on the left in 4.3&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "cvyzGfgavOABC@ABABABADABAD?DAB?B?@?B@B?B?B?@BH@D@B@DBB@BB@BBB@B@TfBHpALzBP~CJ~A@\\Hz@Dd@Df@J`ABTBNDb@Db@FZHj@Fd@BND\\FZF^Lp@ZxALl@FVLd@DPFVDPJ\\J\\fAvDhA~DnAjEh@hB@FVv@xApF|BhIp@`C`@rAZjAb@|AVx@Rn@V`ADNNh@d@fB`@xAj@nB^vA`@xAl@vB~@fDdAtD\\nA|AlFzAjFr@hCl@lBHZj@nBp@`Cd@jBl@dCh@xBl@jCJf@j@`CBLDLt@jDDPl@fC@BvDtPPt@rAzFRv@Px@d@tBFV|BdKzAxG|CbN`EpQ^|ALn@FVPx@hAzEz@rDNr@\\`B^vBDVF^Hd@Jt@Lz@Fj@LfAJ`AH|@Fl@B\\BTF~@Bn@@RBVBn@D|@?T@VD|AJlG@f@@t@DfDD`CFnEBlA@|@B~B@jB@T?t@@|D?dE?vD?bA?tDAbN?zF?|B?~@?lC?jC?fJA|E?lF?pA?`BAbCArA?ZAhCEpCAl@CfAEpBCbAE~@SfGQjEMhDObEG`BC\\OnEAPQtEu@lRSxFUzFYvHWhHQpECp@IfBGfBEdAS`FIdBOtBIhAKrAKjAKlAMbAIv@c@fD[jCMnAUdBa@fDABeAzIkBtOg@bEq@xFGf@a@fD]pCOlAsBbQ_ArHi@rEIt@Kv@UvBMnASrBYzCOhBKrAOtBU~DUrEEx@StFEpAElBA`@Cv@C|AAtACjA?b@Ar@AtDAtAAjB?`@AzECjKAr@Mpd@Kv_@EhIChKC~GApECfMCnBAvBA~B?fB?dB?hA?DBbBDnDFvDFnBL|D^vJVrElA`UDr@Bh@Bd@~@~PbAnSf@fKDdADz@@j@DbADvBBfA@|@@tCC`DArBEtCu@v^KpFEz@E~@Ev@Gn@In@Gj@?DE^If@Il@o@tDk@lDsAfIa@tC]zBQjAc@pCUbBkBnMa@tCm@dEw@vFKn@kAhIYtBs@dFO`Ae@bDk@`EGf@Il@Kx@Gd@CXCVGx@Er@Ct@Cz@Ar@?n@?t@?r@?b@@j@Bj@Bl@FrALrAp@~Hf@~Eb@hEb@lEJtAFz@BbABt@?p@@v@?z@?l@C`ACjAEv@En@Eb@Il@Gj@?BOfAUzAQjAq@|Dy@lEkAdHo@xDy@`FGZKp@yAzJy@|HGl@U|CGp@En@YdGALAd@M`IAn@?lBBrBB|BDvBD|@@r@JlBFtAD|@Dp@LzBJvBFbAFnAVdFtAvWVdEPdCHfANfDf@`Kf@vJf@jJj@~Kf@~JFpA?FDtA@nA?hA?l@An@Av@Er@Er@Ix@KbAIt@Mz@Mv@Mn@a@tBoAzC{@pBKRq@tAu@bBo@fAuAfDo@fB[~@]lAkAhEs@xCWxAYnBQfAK`AMpAGlAGzAEbBCxAEbBAv@A\\Cx@Az@Er@G~@K`AM`ASpAMh@On@Of@GPKZQf@Wj@OZS`@MTQVOTYX[b@KL_A~@gAt@_@Tm@Vo@Tq@Po@LyANcBBoDJI@e@Fe@Jm@Nk@Pe@Pk@V[N_@TEBk@`@k@d@o@l@k@f@m@h@sBfBs@j@oAfAKH}BtBiBbBY\\[`@]l@Yj@[z@[bAU`Ae@tBMn@CJ[lAQp@EHSp@c@rAo@dBgArCsAlDy@dC_@xAa@dB[lBYlB]xCWvCQhBIz@?BIl@AFOv@Kj@Oh@Qt@Yv@c@bASd@S^Yd@Yb@}@bA[^_@f@Wb@]l@g@|@c@v@Wb@_@bASp@KXADGVK`@Md@Kd@Qt@s@nDy@bEi@hCg@nBOj@CL[`AYt@Qb@S`@Yl@c@v@Wb@_@r@s@lAiAtBk@`AeBjD]n@aClEEFGLwFpK_CpEYj@KTMZ[|@[~@Wv@St@Ol@Md@Mv@Mf@Ih@Il@Ir@OdAGn@E`@MtAs@jHSxBa@hEAD_@dEYvCGp@Gh@QxAEb@G^Mp@A?Kj@Ux@K^KZ]bAUp@[t@Uf@[n@MVQX_@j@k@x@S^_AzAsBxC{@pAcB`CQTeBdCoCfE}AzBu@hAkBrCABqB|CILwAvB_@l@c@v@GLS`@Wl@QZMZWf@KZELiAhDq@pC[tAUnAKh@?@If@Gj@Kz@Kz@K|@KfA}BrUk@|Fc@nEg@~E?@QlBU~BqAvMeAlKoAnMq@fGmBpR}@zIiApLQ~AiBbRE`@y@rIc@dGIbC[bKCnA[~KWlJCr@_@rMYnK[jMKdHQ|Fq@dUSlF[nGK~AOzC]`GQbDCh@IdBEr@?@Ct@C~@Cv@Cz@Af@?`@An@?h@AlDAzCA|BGzTE`L?`@?r@?Z?N?h@@f@@FDbBHnAJvALzA@DPzARnATjAThARz@BLZdA^fAJTXv@`@bAl@jAt@pA@Bt@dApA|AzE~F\\j@R\\b@t@j@jAf@hA\\|@Xz@ZdATbAT`A@DJl@?BJn@Jp@Hp@?@Fp@Fr@Dn@Bx@Bn@@V@r@BlABhBHrGJjHD`C@|A@tA?nBApC?HAzECnE?PExCCbDAhA?|@?F?`A@v@BfA@x@?BDrAFvBFtCBx@D~@DpB@^@l@BbA@`A?dA?H@|AA`BAbBEpBCfBIjBG|AKpBQhC]pEcCl][dEa@~F[jESlCCVU~Cu@rK_BlUW`DY`EShDGpA[hGWbG]~HYdH]xH]fIQtDCx@SjEEp@KvAQbCQtBStBQvAYxBU~AW~AAD]hB[|AYnA?Bq@xC[lAu@`Dg@vBg@zB[vASfAUjA[fBOhAQnAU|AQ|AMdAQzAOhAMpAcA|JsAlMWbCQxAa@pC[rBa@dCo@bDI^a@tBc@zBKh@o@hD[|A_@jBS`AIb@g@zBI\\U`AYfAYpAU|@AH[rAq@fDUfAs@vDoAzGCLaAlFMt@]jBk@`DSdAUpAgAbGcApFmA`HcFvXMp@_B|Ie@hC[bBMz@QdAIj@MbAMfAKdAKpAEj@Gt@GbAEr@Cr@Cl@C|@CdCAnA?`B@nABjBBjAD`AFfAHxAJvA|@pNVvDHxAB`ABz@BjA@`A@|@?r@Ax@?n@Aj@Ar@A|@E|@Cv@E`AEn@Ev@Cf@I~@I~@AJKz@K~@Kv@Mv@Kt@O|@Mj@EZQx@Qv@S~@Uz@YdAQt@Sh@Wz@Ul@[`AcBbFcEvL_CbHyDbL]bA[dA[bAMd@s@rCs@`Dg@fCMp@]fBYxAc@bCk@|CSbA{@~EmDvRMn@mDnRi@pCe@zBk@xBk@xBIZY~@k@fBe@zAm@|AmA~CmArCqCtGuTtg@{JdUk@nAkArCWn@Sn@g@fBQn@Oh@Mj@Q~@SfAMbAOnAKbAI`AEv@Er@E~@A|@An@?z@?z@B`A@|@FnABx@TlCLfAFf@Jn@Hf@@HZnBLl@DXDVt@`Fr@lEHf@x@bFlApH@DnAxH^~Bl@zDZlBR|ATdBP~ARnBFl@Fp@J~AJtAHnAJfCNxFBhA@dA@bA?nA?bBAtAClCChAAHChAC|@EbAMhCc@`IEp@YtE]zFSpD}@~OS|DgAtQYfF_@nGIvAYlESlDC^WnEAZYdFWpECb@WlEG`AU~D]`G{AjXAJg@dI[xEQdDe@vHEn@}@vOg@tIOrCQ`D{@bOEr@s@nMMnBs@|L{@`OWlEG`AWlE[hFAVUxDw@rNk@jJOhCQzCG~@y@tNu@nMu@nMgBxZOzCaAxQaAlQG`AEjAYvJCvACtAAvAC|BAhB?zAAbA?dC?jE@|W@x[AfE@zc@?nJ?r@?`B?pODn@C~R?pK?zA?hB@~B?|@?~@?hA?bA?pA?`A?`A?xA@j@?`@?P?rB?lC?v@?H?jA?jA?pA?vA?`B?dE?L?vF?r@?P@`@?^?tA?nA?x@?D?r@?r@@l@A|H?v@?r@@xH?r@?P?`@ApE?dG?j@?z@BrH?lB?r@?~I?fY@pG?lJ?hB?rOBzK?pN?xK?r@?|AAbLApB?f@E~BCnAGtB?@Cp@Cz@EhAGfAKfB?@Gp@KdBQ~BKjASnBMzAWnCgAdKmA~LMrAIp@k@nFI~@QbBu@hHSjB[jC]bCIp@[hBWlAUhA]tAa@vAe@~Am@dB?BYt@_@dAa@bAc@`Aa@v@uAbCe@x@c@r@}@lAo@x@KJqA|A"
                     },
                     "start_location" : {
                        "lat" : 46.5035353,
                        "lng" : -87.6659641
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.7 km",
                        "value" : 6677
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 254
                     },
                     "end_location" : {
                        "lat" : 46.5465217,
                        "lng" : -88.5369687
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-141 S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_ui{Ghv~zOt@jC^nAbErNpDdM~CxKBHzDzM^nAxAxEv@rBh@tA?BTh@Td@Zn@d@v@d@z@RZj@`A^j@|@rAjRbWhHvJBDbC|CbDlEX`@bCdDBBZ`@fCjDfCjDtBtCv@bAfChDrAbBxBvCLPpAdB`DnEZ`@^f@dDpEpCxDrEbGhMxPxHfKjA|ARX`B~BnEbGl@x@vDdFxEnGzDhF~AxBxBvCpAdBZ`@NRn@bALRRZt@rAHNb@v@BDb@~@f@jAJV\\v@Xz@^fAZ`A^nAh@nBj@jCXpA\\hBTbAhCxLr@lDrCpMThAvA~Gp@jDx@jEZhBNz@b@tC"
                     },
                     "start_location" : {
                        "lat" : 46.5852838,
                        "lng" : -88.4722149
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "119 km",
                        "value" : 119361
                     },
                     "duration" : {
                        "text" : "1 hour 12 mins",
                        "value" : 4349
                     },
                     "end_location" : {
                        "lat" : 46.476669,
                        "lng" : -89.94109539999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eM-28 W\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wbb{G`kk{Of@fDJz@f@hF?HTlDLpBFtALjDHnDD~BFlFVtUVnRNtM@r@R|P@t@F`FJjG@XHfBBh@FhATlC\\nDNbA\\hC`@vBl@nCdAdENl@dBzGlHxXjEpPdHtXj@tC`@xC\\hDRdCVfERfFLdFDzBJdDd@tQBr@h@dT@X@XNtHBdCDzH@p@?r@F`LB`FDpK@r@@pEDbIF`OHrRBbGB`HDfGF|BZtFVzCdAhI|BrQNfA|@fG\\fB`@dBdAnDf@tAh@lAt@|AbDfGVd@bAjBjAxBdDjG`AhBvE|IhGhLVf@tCpF~NrXlDhGTb@@@fArBn@lAlFfKVd@pBxDz@dB^~@^bA`@hAVt@j@tBVlA`@rB`@rCX|BRjCDbAF|ADzAD~DDpBHdEBdAFhCRfENlB\\tCHp@NdAVjANz@l@~BRj@Nj@vAhE^nAz@`Cz@`Cj@bB`ChHRj@xC~I?BpBdGfCrHlAnD`B~EPf@tEhNv@~BdE~L\\dApDzK`@fA|A|EFRz@xCfAhENl@`@jBDPpAxGHb@r@vDn@fE\\`C`@nDXbCBR`@lEXdDBb@Fv@JrAJbBPhDBt@?HDt@HtCBz@B|@@t@BvC?z@@zG?lP?NApRCfH@~H?dG?zGAtM?hJ?B@lD@`GB`H@zL@bB@n@Jj\\DnKPdk@?r@Lt_@Jj\\@`DDjDHpVDzKHvZDrMB~FFbQ@zA@tADvBB~@BrAJvBBbAFnARrCJpARpBJrAd@zDZbCh@|CPjAlAjFrAtE\\nAb@rAh@`B\\`A^bAZv@`@dA`@bAn@|A\\|@nA`D`A~Bn@~A\\|@^bAj@bB\\dALb@@?V~@f@fBd@jBb@hB^`Bb@vBRdA\\rBVfBHf@XrBLfAFh@Dd@RpBHjADh@Df@HhABf@Bf@Bd@FnAHzBN`EXdIHrB@XBr@?@JrBN|CHtA@RDl@HjAJjAHhANtB@BDf@PjB\\bEZ`DPnBH|@T|BVxCVfCPvBH|@|@|JNnBJnAJnAHpANlBHpANrBNtBLtBNtBLnBHnA^jFXdE`@lGNpBTbDLnBLpBT|CZvE`@zF`@jGFn@V`Ef@rHRxCh@xHRvCLfB@LNtB@TJ|ATbDRrCLrBT|CR~CPfC@LTjDHrARxCRxCR|CD`@HrATzCLtBT|CRzCHjA@TFr@Dj@^rFZ~EX~DR~CXbEj@zIJnA@TZpEr@tKVxDXjENlBLtBNrBVbEDj@NpB^tFDr@^xFT~CDr@`@~FXlEHfAf@nH\\lFNnBd@jH@HDh@XdELlB?BHlAVvDJrAv@lLf@rHJ|A@HZjEPjC?Jf@fHTdDPfC?FBb@NtBRrCJdBDz@FnABjABl@BnBD`H?vI?pEB`ABb@Bj@D|@Bd@@XHvABbA?H@l@?d@?f@Af@Af@Af@EjACh@KhAIfAm@nFAJo@zF]zCMnAk@fFKbAGh@QtBOrBCb@IpAGhAGnAEhA?LEbBCdAC`BArBAnA?B@dDBvC@|A?DLhO?FD~FHbJ@^?\\DdGD~DFtG?^JrL?j@@dAB`A@zC?b@JxL@j@DdGDfEFxHH~K?@DbEFdJJtL?RRjUJnNHpI@|AJjLF`HJzMBxBD~CBzCDxBFfCD`BFvBL~CBd@HdBBv@HlAPzCNtB\\zERbCXvCZpC\\~CR`B\\jCRzAz@vFfAdHtDbVbBxKhG~`@xF~^r@tENdAD^NrALdAJnAHx@Fx@BVDl@Fv@Dp@?@FbAFhADhAFvADlBf@~Of@zPdAz]p@zTXdJZfK\\xLLtD?n@@`A@`CApCIfEKvBw@pUE`AS`GKjCGfBEbAO|D?HO`ECv@Cr@EhAGlDCvB?dB?|ABdC@`A@`@@TD|@HfBF`ARzBNpA|@dJrDb_@jAlLBZHp@dArKHr@@Fz@xI\\pDh@nF|@tIXtCdAtKvAxNNpAJnAVfCXpCt@pHLtAJhAFt@Fl@Dz@Dz@D`ADrA?b@@^?R?|@AdAAlAGjBErAMhBG~@Eb@MjB]tEuA`Sa@pFgCr^[fEQ~BWvCSxBQlBUdBQpASzAEXKn@ALUrAYhBQ`AGVMv@Y|AWlA[vAYtAm@hC_@dBk@|B_@tAENYbAmAlEk@nBK`@sAzEKZ]lACFy@~CkA|DQl@{AhFy@tCm@hBc@jA[x@Sf@g@hA_@x@_@r@KRS^e@v@a@p@Yd@c@l@y@jAq@x@q@r@e@f@u@v@yArAy@t@w@n@g@^aBhAq@b@UPIDiAr@wFnDcEfCaEfCaDpBmJ`Gq@d@mCbBoEnC]RgEfC}AbA]TA?aCzAc@V}CpBwA|@iBjAa@Tm@Z[NYJWPu@\\]N_@Nq@Xa@NGBm@TMDWHo@Ra@LcAVc@LSFc@Ja@Hs@La@Fa@HA?{Dn@qAToARe@Hc@HQBqAR{@Ns@Lc@HkARgAPaANMBq@Jw@NgAPSDMBq@J_AN}@Ju@Fk@Bg@@m@@{@As@AaAAs@Cu@CA?y@Aq@AUAM?gAEOAYA]?[AYA[?[A[?YAYA[?w@AkBEK?c@A}@?mA@w@Du@Dw@HQ@c@FmARoAVmAZmA`@u@XmAd@iAl@q@^kAr@aAl@kGtDaIvEcFxCoAr@eAp@oAr@aDjBCBiAp@kAn@o@`@q@`@q@b@WPYRm@b@o@f@q@j@g@d@o@l@m@n@k@l@kAvAu@~@c@j@MRQVq@bAy@pAk@fAGJ_@r@OZUf@_@v@Wj@[r@a@bAWr@]bAYv@]hA]jA[fASz@Sx@S~@UbAUhAQbASlAO~@Kr@OnAMfAMlAO`BMxACf@Er@KbBA`@Ch@EfACjAAr@?JCfA?z@?~@AfA?hC?lJ?|K@j]?xH?lJ@tM?lJ?vM?r@@jK?xBA|P?xZ?`L?zC?r@?lJ?ja@?`F@xE?fA@jE@lJ?zC?rA@xC?tCBdABdAZvGB\\z@rPpCfi@h@tJLfCHtBDjB@tA?lA?rAA`A?HClACrAIrBOvCKlAEj@Gx@a@dF[jE_BxSe@lGMjBIzAE|@GnAARCn@Av@ALC`AAdACfA?z@AfA?~@?dA?`@?\\?`A?hA?dA?v@?P?r@?|A?|A?~A?pE@bM?xH?bG?nW?`I?zI?zC?t@AnWAdI?zA?r@?fBAf\\C|N@`BBdN?pK?t@?vH@rC?xH?t@@zC?r@?fB?t@@`N@xH?bJ@~J@vH@bI?vE?X?jF@tJ?`A?pE?d@@vD?zF@vL?|B?|B@fEAxDAfB?hD?nE?rBArP?r@?~P?xBAhE?d@AtAElDC`BErAAZGtACh@M`C]|E[zCQ|AQ~AAFk@jEq@jFWpBk@lE_@tCIp@gBhNqAdKc@hDiA|IKp@yBdQgBdNSbBg@xDkE`]mCxSmAlJo@fFuDpYIr@_AfHsDpY_@tCEZyAdL}A`MsBxOcA`IWrBiBtNu@zFyDfZOhAcFr`@wA~KwAxK_AjHIp@sCvTg@xDw@jG}@|GsDtYiBrNsJtu@s@xF_AjHw@bGiAbJ_@nCQvAUdBgApIkAfJ[bCm@xEIp@_@pCoBnOyAhLiA|IsCzTKp@_@tC}A`Mu@xFuFfc@aGje@iA|IqBtOmArJeEb\\Kz@sC|TM~@m@`Fg@vDcAdI_AfH_@xC_CbRy@pGu@fGGj@gCpSIr@MlAs@`Gi@fE_@vCALe@jDYvBM~@Ij@g@xDgB~LyBnOYjBGf@mBdNmBjOiAvIs@xFi@hE_AhHSdBiBrNIn@a@zC}@fHEZcA`Im@zE}Dh[Y~BQvAsBdPu@xFs@xFYxBIj@aApGm@tCYxAMf@i@zBQn@Md@M`@YdA{@pC{@fCYp@}@|BqAvCw@`Bg@fAuElJkCnF{D|HMXcMbWe@dAwAtCKR}@hBGL}@jB]t@{@hBcAjCM\\A?M`@O`@Yv@Qf@CJYz@Qj@Sp@u@jCGVCHK`@Sv@[vAUdAEVk@rCKl@QdAIh@Gb@CHQlAIp@In@OlAIz@Ir@MnAMbBKrAIpAM~B?NCr@MzCCfBAr@Ah@AtBAzF@pO?pM?lR?r@@`L?x[?dG?rR?dK?xH?vA?xA@bD?hB?~B@zC?`H?zC?dC?lD?fB?~D?jH?tD?nA?zB@^?fB?R@r@@j@@l@@f@HnBBr@Dz@L`BFt@HfALfAJ`AL|@NdAZhBnAxGl@vC~@bFhAzFrA|GHb@`@jBh@zBTbAFXf@rBDJn@jC\\nANh@?BfAlEPt@Nv@Lp@@JF^Hd@Hh@Hl@PxAJbALzAH`AD`ADv@Bv@FlBFdCFbDHlCBd@@L@TBf@JfANtAPnAN|@H`@H\\Rx@Rt@^nABFRj@L\\Rb@b@bAlA~BdCtEnJtQ|@fBn@lAlAlClAzCz@~Bj@hBf@`Bf@fBd@fB|EnSjA|ElAfFfJl`@~CtMnIj^xC~Ll@jCfBjHbB|GzCxLnClKf@nBdCpJlHzXlB|H\\xA^`Bb@jBBLhBrILn@^hBXtALn@Nn@fC`MP|@b@zBn@tD@FTxA?BXhBf@|DZtC\\zCLhAd@`F\\hDf@jFd@|ENpAz@bItAnLFp@L~@Dd@Hp@\\tCz@vHFf@fAlJbBbObChTxEva@Fr@PxAlBrPvAbMt@zGj@vEj@~EfAlJ@P`BvNn@xFbBvNvAdMZvCdAbJlApKfAhJlHno@bA~IxBrRjDpZbIzr@jBhPPzAbA|IVvBHd@Hb@PjANtA\\rCb@vDTnBNzALdAL~AFlADv@D|ADrABvCFlHJfSBdFJvNBzF@T?jA@nATbVVbWX|\\DbBBrGDfJ@fE@jEDtVBzMB|L@VFbLF`JF`LNvVBdCj@|aA@D@vCAtCAtBAz@C~@IzCKfCSpDEn@SnCk@dHEt@Gx@Ct@A|@Ax@@|@Bx@Bz@HpAFp@Hl@Jt@Jn@Jb@Lh@Jf@Nf@Pf@Pd@Vp@|AvDhAnCRf@lBtEnDxItDbJ~FvNnDxIhDpItDbJJTjDnIhBnEfBhEpBzEbDdIvBhFrBbF|KjXpExK~DzJpCxG`AbCTh@fAjC`GvNb@bA|@tBbAxBbAxBvAvCjD`HxGpM`[rm@bBfD`AhBdDrGjD|GvApCz@`B|@hBf@dA\\n@\\n@NX~D|HdCzEhBlDz@dBrGhMzKhTrH~NnTvb@dHdNnCpFnHvNbAlBlChFrB|DlClFl@lAnClFdEfIpAfCbGpLvBfE^p@bArBrCzFHPbDtG\\n@t@|A^v@b@z@h@nAbAjC`@hA^nAv@rCJ`@R|@H^f@bCd@hCv@vEfC|N`ApFrAtHr@`EXdBPz@XdAX|@Vn@JTZj@\\l@j@x@VVZVRJPHRFRBZBl@C\\IHELEPKLILKd@k@RWDExC{DxAiBjCeDd@k@X]f@e@XUTORMVMt@S^IREVAf@C^?XBt@Jl@L|@b@PN@@NPl@v@HRP^ZdAJp@DZ@NDd@DxABrADbBHhEPhGLbHBn@BZBVDR?BDPLVNRJHLHPDb@HxD@"
                     },
                     "start_location" : {
                        "lat" : 46.5465217,
                        "lng" : -88.5369687
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "84.7 km",
                        "value" : 84736
                     },
                     "duration" : {
                        "text" : "1 hour 1 min",
                        "value" : 3658
                     },
                     "end_location" : {
                        "lat" : 46.588,
                        "lng" : -90.9523425
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eParts of this road may be closed at certain times or days\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dairy Queen Grill &amp; Chill (on the left in 8.5&nbsp;km)\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Wisconsin\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "entzGzr}cP?jB@lDA`GCtDGtGG|BOfHKxDSzKCbBE|AQrIElDIzDAl@CjACjB?jAAz@AxA?xA?l@Af@?X?rB?t@?r@?hB@`D?\\@rE?R?fB?lD?bCAz@?JC~BCjBC~@ALAd@C`@C|@GfAGrAIlAG`AMvAC^CZIt@UvBOlAOnAGh@CL]`CMt@S`Aw@`Es@`DqAjFQr@{@lDu@zCi@|Ba@hBAFKf@?BOt@Q~@Mt@ObAGXMz@M|@CRMbAKz@Ir@CNEb@O~AI~@G~@C\\Gr@C^KtBItAGpBa@`NUjIS|GQnGYzJI`Ca@lNQbGOvFUvHQbG[jLMjEG`DE`BA~A?H?`CBrB@lBH|DFlA@l@HtAFrALhBLdBTfCp@jGZtCTtBfA`Kz@~H\\`DHl@zArNRfBLrAPdBRtCFnAJfBDfA@FB|@F|ADjB@bB@fA?B@nAApA?tA?BAbBCzAGdCEbAEnAKlBEbAMlBa@~GQtCK^KdBOjCIpBEnAErAE`BEzBEhCDZC~EAtD?lD?f@?lFAfI?dIAbI?~D?nE?hJApJAxH?zG?nE?dFAbI?|C?dEA`LApE?r@?jBE\\AtLApEAfDFT@bAAfG?fI?tF?|C?rA?zB@lJ?~C?fA@l@?JBv@Br@Dp@LvAPzAN`ANz@FZ?DLh@V~@^nAf@xA`@`Ab@z@Zl@x@pAbAdBDJRZRb@Vj@DHL\\Xr@Nd@Ph@Tz@?@Rx@Pz@PfANfAFl@Ht@Fp@Dp@DlA@bA@zA?jC@vP@vX?~@?tI?~@@t@Bl@@N@ZDp@Ft@LdAPfAHd@Jb@Jd@J\\L`@b@xA@Bv@`ChApDPl@hDnKtCdJPj@Jb@Nn@Px@N|@Jp@Jt@LhAH`AHpA`@fGv@lMf@pHhAfQb@xG\\xFLvANlANrARlATjARbANt@XlAVz@^lAL`@Nd@Vr@Tj@`@`Ad@bAh@dAn@dAz@pA|@nAj@n@b@d@PR^^j@f@d@`@z@n@fDdClCnBhB`Bv@x@b@f@X\\n@x@j@z@^l@`@r@^t@Xj@JTPb@l@zARf@Rl@Tv@HZFPPn@Nl@Jb@Lf@Ll@DXF\\D\\B\\B`@Bd@@pA@bG@rB?~@?dA@x@?bB?|B@fGClGA`CAfGGdM?nAC|G?vCAnEC~BAhB?`@?lA?zA?`CBhD?F@j@DvF?JF~HBhDBpC@lA?L?bA@f@?^?J?x@A\\?p@GbOE|JEbGEpK?jACjFA~DCvH?fBA`C@`G@|C?fBAxA?hB?xC?d@?bAEh@?^Ap@?f@A`@C`AEbAGx@Cf@Gj@Ep@E`@ERCVM~@Oz@O|@SdAU~@Qn@YbA[`AIRIPIVQb@Yt@sB`EmA`CcDrGaCvE_@t@k@fAqAjCmK`T}DdIu@xAw@~AuA`DYr@_@`A_@~@c@rA_AzC_@tAc@~AGV]rAa@bB}A`HWnAQz@IZCPEXe@zBuAnGOn@]~A]|Ao@vCi@dCe@tB[xAETyEpTq@~CyJjd@oA|FoFvV{Gd[cB~HsDxPgBjIoA`G}@dE]zA_@hBc@hBcAtEi@jCm@tCMj@Mj@s@bDeAzE{@|D{@|DuBxJyA~Gg@xBiAlFsDxPyEtTaApEQv@Mn@ABa@lBo@rCi@hCYrA]dBShASjAQfAMfAMvAKjACl@G~@EjAEdAChB?V?v@?pA@zB@hU?lA?|C?hE@tG?lD@jJ?t@?tD?zG?b@@jD?vA?xB?~@@nC?N@`C?tB@~C@vB?^?|B@~C@vD?BBtI@jI@lA?nB@zC?fA@r@?|C?r@?lC@dB?vG@dE?zA?T?~C@`C?r@?fF?L@bE?bG@vT@lD?zA@hE@vK?zE?zCApKA~I?pE?lCCnL?xH?jBAtHAjE?|H?NCpJ?rGAnBA|@At@CtA?NCt@ExAElAK|BKrAIjA?DMvAK~@KjAEd@Gl@ObBEZKnASnBM~AIz@IjAIjAGpAC^Cr@Ch@IpBEtAChAErDArDCpEE|KEnECdDA|AA|@ExHIpREdG?r@Ar@CnEAvCAdDC|CAzCAr@A|COdZIhOA|CCnEAzCAr@A|CAr@GxNCjEAtC?JC|BGtC?LIvAGrAKrAEl@Iz@QxAUxAIj@SfASdAWdASp@Qn@ENQf@[dA]dAQj@w@dCi@`BYfASv@CHMb@s@hCQl@s@hCOl@KXkB~G[nAa@tAeAvDWfAYjAQbAO~@G`@EZK|@In@Gp@Cd@Gv@Ev@EbAEvGAjCAt@AnECpEE`LCvHGrRErHCvFA~FCpEE`LCdH?PA~DCpEAzEAtM?zC?r@Cbk@?r@A~P?r@?bG?|HA|C?zC?zCAbK?nF?pEAlJ?nE?`FAjO?zG?`@?xB?zCAbL?nE?r@?dGA`L?nF?v@?fCApE?vP?nM?lBAlJ?@?~K?nAAxAArAGnBCn@Ez@MjBA@IdAOpAEVEXKt@Kr@Q~@_@dBS`A{@|C{@bDs@fC_EvN}DvNOl@oEdPQl@uAdFgBpGeDvL}BjIs@hCyC|KaBbGy@vCQl@]rAm@vBIV]pAcAdEI^U~@_@~AMf@c@hB}@zDyG~X}BvJmBfIoBhIEPi@xBmCdLADkAdFiAxEeAjEMh@ABmDbOeArE}EnSU~@w@dDaA~D[pA}@|D]vAe@lBqDrOyCfMoBjI_BvGuA|Fy@jDwBfJ[nAy@xDyAbGc@zAm@dBCFSj@]|@KTSh@c@dAu@bBsA|CsDtIkDdImArCqGbOcErJaCrFk@pAu@bBKVkAnCa@~@_@z@uB|EgFxLoAtC{@tBIRoClGkAlCw@jBWl@uA~CUh@uA`DyAhDwCbHQ^yE|KgC`GUh@eAdC_GbNCBi@pAuFrM{@pBaA|BWl@mArCqAtCwAdDUh@cCvFw@fBa@r@i@~@k@dAg@~@]h@w@lAY`@e@r@i@r@q@z@ORe@j@iArAmAvAIH[^aAfAgBtBqB~BoAvAiBtBwKjMgBrBML}@dAe@j@q@v@kArA}CpDSTkC|CmBzB[^yH~IgM|NqJ~KmFhGuQ~ScF|FqJ~KiD~DgE|EmC~C}ExFyAdB{ClDmFhGmS~UcF~FwGxHEDaAhAQT_BjBaAhA_AfAA@eAlA_AhAmAtAeAnAA@_@d@e@l@[`@[b@_@j@a@p@i@x@i@|@i@bAe@|@a@t@_@x@_@z@_@z@c@jAi@vAe@nAk@jBUt@Ux@]lAOp@[rAu@fD{@bEw@tDkAtF{@~D_@dBi@hCQr@Oj@Oh@Oh@ABM^Mb@Qd@Ob@Ul@Yp@e@bAg@hAiAbCqAnCaCfF{A`DyF|LqCdG_@v@wA|Cs@|AsExJUf@kJfSeIbQgA`C}B`FcAvBe@`AuDdIk@lA_@v@GP}@lBaArBADi@pAc@fAe@pAWr@ADSj@_@hA[dAYbAELa@vASz@Sz@Oh@Ov@YrAc@zB[dBaCrNiAbHe@rCeCdOY|AU~ASxAMbACNOtAQ`BQhBEn@Iz@K`BM|BIpBGtBG~BAfAClC?jC@f@?rABxBD`BD~AHjBHdBHxAHnA@LTxCTbCd@tFb@dFf@vFlDja@r@jIN`BNtBh@bG@Dd@lFHdAFv@T`DLzBLdCNxCPbEJhDHlDBxABpAD~B@rA?~A@vA?pB?fB?RAdDAbECvHEtNM~_@G|OM~b@EpNAnCCrE?p@?fA?xC@rC?j@?rA?fI@jG?pH?~@@~PD~fA@hO?bLDlj@?dH@rM?dF?@?jFE~NE~QExNA~GCbIAxHEvMEfTKrd@EzRCxHA|C?r@GvWEtP?fCEpAErFDvI@~A@pE@bE@dN@jK@`E?jF@dA@lAH~@Dl@D\\Jl@Ln@Lj@Pp@Ph@Vv@h@zAHT`@dAL`@`@lAh@bBRZxBvGf@vA~@jCh@|Ah@`BrA~DvBpGn@nB^pAn@jBx@bC`B|EjAnDx@dCx@~BX~@Xx@Nh@FVFTH^H^Hd@Hh@Jx@Hl@DVz@zGD^~@pHRvA?DJr@F`@Jl@Jb@Jd@Jb@Nf@L^hBnFz@jCn@jBhBpF|@nCN^J\\JTNZJTJPPXRXTVVXTRTP^T^R~@n@HDXRPNNNTTNTLPLRPXJTLZr@rB~@tCl@fBjBtFl@hBTr@f@xAhBrFjBtF`@lAb@pAd@tAn@nB~@nC~@nCn@lBh@~A^fA`@nAjBrFb@nAhAhDnAvDXz@Xx@FNLb@Vr@N`@Nh@j@~Al@jBTn@Rl@Z`Aj@bBN`@L`@b@lA^jARl@DLRj@d@xAn@jBhBpFl@fB`AxCt@|BdDxJt@|Bt@xBjBpFv@~BTr@Nd@?H?F?D?FBJLh@Jd@DLDVF\\BXDVFh@n@jJNbCFx@JtBBrAFhBJ\\?^@jA?dA?jAAhACbBCzBC`CEdCCpCG`@ATCZAl@AzAEjDCfCEzAC^AZIdAEj@C`@In@Ip@Mz@Mx@Q~@Or@Q~@YdAYhAgAzDoCfKcArDcAvD[hAOl@UbA[~AO|@Ip@CLIj@MrAMrAC`@?B?B@B?BBLC^Ch@CXCr@?DSdFQ|E?HS`FShEGlAGlAQ`DUzDIlAMtBYvD{@lLG~@GfAQtCuApVGVCPC^El@IvAGvBAfA?pA@xADbBBfAD`AFdAJz@"
                     },
                     "start_location" : {
                        "lat" : 46.476669,
                        "lng" : -89.94109539999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 157
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 46.5875437,
                        "lng" : -90.95426209999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eUS-2\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "_fj{GbccjPd@lCl@fCD\\B`@AZ?L"
                     },
                     "start_location" : {
                        "lat" : 46.588,
                        "lng" : -90.9523425
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "78.5 km",
                        "value" : 78538
                     },
                     "duration" : {
                        "text" : "52 mins",
                        "value" : 3108
                     },
                     "end_location" : {
                        "lat" : 46.60669009999999,
                        "lng" : -91.9086028
                     },
                     "html_instructions" : "At the traffic circle, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "ccj{GbocjPA@A@A@?@ABA@?@A@AD?BAD?B?@?B?D?B?D@B?D@B@B@D@BBB@@?@@@@@@?@@B@@?BHRd@LPJRh@`AxAxCfA|A|@lA`@d@\\d@JJnB~BNRx@`A~@hAf@n@RLbAtA~AvBjBfC~@rAzAnBDDX`@fAvA`@j@dB`Cj@v@fBdCbCdD`ApAfBxB`CrCZZfBpBJHlBnBr@p@b@`@\\\\x@z@z@x@PRJJLLd@f@b@f@FHRTX^b@l@V^^j@?@p@bAT^j@x@f@`ATb@Rb@?@`@x@`@|@d@fAVl@Vt@FPPd@p@pBPh@b@zAFXJ^\\vATbALt@DNTjAVxALx@v@pEDVb@lC\\pBb@fCVvAf@vC`@`C^bC\\nBh@~C\\rBf@tCzAbJ~@pFf@rCZlBZlB^zBLn@XfB`AbGDX^zB^|B`@~BXxAFZHb@VnAJ`@\\|AXhA@DTz@\\hAXdAV|@FPNb@Tl@Vp@tAvDpAnDpAjD~BnGlClHvAvDdCzGp@fBPf@n@dBb@hAf@tAf@tAzBdG~AjEpAjDnBlFzCdIBFtAtDjAbDLXpHjSzDjKr@nBlAfDx@tBj@~AjA~CbAnCp@lBl@dBBF|AhEbCvGPd@nAbDjAbDLZ`DzIJVp@hBbAnCt@rBd@pAv@tBx@zB|@`CFRv@tBXt@|@`CvAvDd@pAdArC`AhCHRPd@^bATn@Vr@Tn@j@zAr@nBj@|A@@h@xAj@|AZ~@DNh@bB^jAb@zAZjA`@|A~AlGz@lDf@xBf@lBPp@J^BHPv@v@vCb@dBx@hDLh@`BzG`AxDPp@Ld@Np@ZlAf@pBBFJd@b@bBn@lCVbAf@nBf@lBFX\\rAPv@Lf@ZlA\\rAXnA`@zALh@p@nCX~@`@bBf@pBlB~HV~@d@nBDNRt@XjABHLh@`@|A^fBBJj@zBV|@J^J`@DNFTVdALt@b@bCLr@RvAF\\LbAJdAFl@Hx@Dl@Dh@Df@FdAD`AB~@DvAFdCFrDBbCFjDP~JJbGH|DBhAFzCFtDLdGVnNRzJJhG\\bRDfCLlF?RDlCF~BBvANfHHdDFzDD~CBjAJ~EF~C?HH|DFxDJlFH|DHpEJvF@h@FhDFtC@^BnBDjB@h@BvADrB?BD|BHzDBfBBvA@PBtABbAB~AFvC@p@BzABhA@h@BhAF|CF|CF~CBjA@`AF`DJpF@ZDrCHtDBlB?fA@nBAvA?dACvACzACtACd@C|@IfBEp@Cl@?BOzDWvFKdCCr@SnEOnDKdCCt@MxC?FO`DQfECj@MpCAXCb@G|ACl@KjBCh@GhBO|CInBK`CInBGxAAZEdAA\\GtAGfBE`BGpBCjAC`AA`ACxBCjC?`@AtBA`B?fC?fDA`G?lB?bCAxA?dEAjE?bFCxN?`AAhB?hAAvICdY?bJA`HC~TAxTAfD?rFA|NAnDApD?V?rGCjQCvHAfG?pDAbH?r@AdGAhOApEAhH?lD?P@xI?~JAbF?jG?rCAxH?j@?bDAlC?V?vB?vBAhB?pAAdAAn@Cz@EnAEt@Ef@Cf@Iz@I|@Ir@Gf@CTEVKr@Mt@UpAg@bCi@jCI`@Qt@Ov@Kd@GVETGVETe@|Bw@pDm@rCAFm@pCI\\c@nB{@bEAFi@fC]~ACL}@dE{@`EETI`@EL]dB[xACHa@lBSdAa@jBWrAk@nCy@~Di@nCk@lCk@nCuA~Gm@rCuAtGMn@]bB]~A[zAOt@WlAg@~BMj@o@~Cs@dDu@tDYpA_@hBaAtEUlAg@~Bg@bCo@zCCLI`@u@nDq@bDy@vDEVwDtQUfAa@pBETe@xBMj@k@lCc@xBUhAOn@CLc@vBQx@_@fBYtAGTc@zBg@~BYvAUbAOx@[tAk@pCS~@IZWhAm@`CK\\a@|AOj@YdAYbA{@|Ck@tBq@hCk@pBYdACFo@bCIZ_@tAQr@c@bBe@~AYhAa@xAYdAW|@w@xCELYdAYjAQx@Mn@I`@M|@Kp@If@Gj@CHGn@Ed@Eh@Gt@G|@Eh@Cp@Ad@ARA\\AX?@?^Ab@?`@?B?r@?N?p@?z@@n@@Z@X@T@PBl@@^Bf@B\\?BDj@@@Fr@@NJz@BXJz@Df@LbAD^Hz@NnARhBHx@BTRhBRfBb@bE\\`D\\`DTxBD\\P~AHv@Hn@RlBVxBJbALdAHn@Fp@Hz@Df@D`@Bd@@VBd@@XBf@?l@@t@AtAAX?BChAEz@ANCf@Eb@Eb@Gh@CPE\\Gd@GVG`@Ml@Id@Qr@CHOh@cAjDaAhD[dAe@~Aw@fCOf@o@|BgArDIX}@`Da@rAGN[jAQj@c@zAKZi@jBGRw@jCY`Au@fCo@tBuAxE[fAe@xAkBlGoAbEIZ}BzHc@zAw@hC_@rAUr@_@pAUt@u@fCyFxRgAtDgAtD{EfPw@pC_@pAg@`BMb@Y~@Mb@ADWz@[dA}@xCcAjDK\\{@xCKZw@lCaAfD{@xCg@`BOl@[hAWhAQ|@AFQ|@ObAM~@OdAEf@ALGf@CZCXAVEl@Ep@Cx@C^Ad@?PAPAr@AbA?vC?jD?`D?|C@xB?~@?|B?x@@p@?n@?lB?lC?t@?`C?jB?|B?H?xA@~C?B?tC?v@?dE@fD?xD@xC?pD?~C?^?`A?lA?bB?d@?`@?P@hA?xA?xA?pA?bA?~@?v@?b@?N?rA@xC?fC?`B?B?lA?bC@xC?fB?pA?vA?xA?V?lA?nB@~A?tB?vB?f@?nC?t@?~@?t@@lD?tC?|@?nC?~A?h@@zE?fG@~B?rA?vC?hE@nC?lB?zA?tB?~D?xB@rB?hB?lA@~D?zC?X?nA?jA?|B?jA@zE?jDBpH@dE?pABjH?lE@hBErBC`AAJGtBCx@e@lOQbGCbACbAI|BIpCCl@A\\C`AElBAXCjAC~@CxBAhAA^E`CCrBCvBGjEGxDCnAA`AC|@?NClAAz@An@A^C^EbAG|@InAIhAMlAE^Gh@UbBYnBWzAQjAMp@If@Y`B]lBAJWzASpAQnAQ|AY`COdBGv@Gj@Ep@CVC\\ATCZEfAIpAGjBGvBE`BCjAAfA?z@?vB?`C@`I?nE?d@?zA@pH@dK?vC@b@@rE?v@DzG?^HrHFrEBdE@b@@tFAxDAxCA\\?ZClBChBE`BGvECzAGhEItEAZ?j@CtAA~AC~BCpCAjCAfC?dA?r@?bCAvB?hBAnB?F?l@?v@?bBAT?\\?pA?V?fB?`BAnB?r@AbG?|@A|C?TAtC?nB?`@?dAAtA?xC?zB?`B?bC@`E?vB?pA@|C@x@@xD@jC@hC@rA?R@|A@tB@fC@dB@|B@fB?D?~@@rA@x@?N?P@T@V?X@P@L?N@NBb@Dl@@XBR@PFp@Hl@Db@Hf@N`AHf@DTH\\F\\H^HZFTJb@JZJ\\HXJXFP\\~@P^N\\P^JRP\\d@z@PZT`@R^\\l@l@dAXf@f@~@pA~BPZd@x@t@tA~AtCPXhArBR^l@fA|@`BXh@Vh@Rd@Vh@\\z@Rf@Rh@L^N\\DLDJFTHRL^HVNd@Nf@Nf@Ld@Nh@J`@Np@Rv@BJLj@?BPt@Jh@BJHb@DVLt@Jl@PrAPfAJz@NpA@NJ|@HdAJfAJrAJnAH`AJjAJlAPpBLxADZJjAHjAFl@JlAJfAB^Fl@Ft@BXHjAJlABf@Df@Bb@@LBXDf@HlAPzCHjAP|CPxCFnAHhB\\tHJjCLlCNnDHdBD|@@TFlADx@HtBDt@@h@Bb@Bh@D~@@RB`@@d@Dp@RbFVzF\\jID`AFvAD~@LhCb@dJLbDDdAFlAPzERbGNnDBr@B|@LpDBf@HbCNxDHhC@VFxAFrBNdDD`ABb@D|@Dj@LrBFhARpCDd@LlBVnC?@TdCLtAPjBDXRfB\\xCNtAZnCR`BJz@BLRfBHj@Jv@D^?BHf@?DHf@Hx@Hv@Hl@Hp@BL^`DZhCNnAJx@Hp@RfBf@dE@JFd@Hp@PxAR`BL~@nAlKXxBVbCHp@\\tCHr@rA|KH|@JbA\\~Cb@xEn@bHZrDPjBNzA?BLrALjADl@JfAJ`ADh@Dj@Dn@B^B`@Bl@@d@Bt@?n@@f@?H?d@A|@At@Al@APElAGx@OdBK`AOhAUtAUhAI\\AHYjA_@vAGPKb@K\\Sp@GRg@vAYx@m@`Bm@tAaArBCFk@fAaAdBw@pA}@rAk@t@oA~AoB~BcCrCyAbBk@r@g@j@uA~AaBpBqA|Ac@h@Y^]`@m@v@kA`Be@n@oAhBeA`BuAvBkB|CS\\cAfB_AfB}@hB_AhBoAnCYl@q@|AYn@y@lB}@|Bw@rBoBrFm@fBc@xA[`AWx@W|@[hASx@[fASv@a@fB]|AYvASlAu@fEq@`EKp@ADo@|Da@nCuAlIg@`D{@~Ec@pCOz@]tBYjBk@lDWbBa@jCeA|GeBpKc@fCqB~L}A`JiA~GKn@k@dDg@vCCJWfBc@xDeCzOaBhKyBjN_BhKKp@mBzLw@~E_AdGa@bCg@hDmG`a@mFb\\iCzOeDdSeAlGQdAOv@Mn@EVMd@IXI\\Wx@AB[`Aw@dCuAjE_HrT}@vC_AzCaA~CiAnDmA~Dk@jBu@`Cy@fCo@|BQp@I\\GX?@Kb@Kd@ETKp@Kn@?@YdBIh@Kp@e@|C}@vFw@nFk@pDo@zDYhBYlB[lBe@xCq@pEi@lDEVw@`FCR[nBM|@CVANEb@AFCb@Ed@Cd@C`@Ar@Cz@C`A?^?bC?`C@pE?jA@~I@fL@zE@r@?v@?bB?t@?fBAxH?pE?pCA|PClH?dCCvL?bGAbFAjHCvMAtG?v@?z@?lAB`A@b@BjADv@Dt@FhAH|@LnADb@Fh@F\\DZHl@F\\Nv@P~@TbALd@Ld@@FZlADLb@dB\\pAb@|A`BdGbAvDlAlEnAvE|AzFz@`D|@dDd@dBt@nCfBxGd@bB^rAd@fBlAvENf@Rz@Lj@FZPx@VxAZ~BLjAJ~@Bf@Fp@D`ABj@Bb@B|@@x@@|@?N@l@?r@AbDCzFC~BCxFAvAAr@AlAAzBA`CC|DE~FC~AIfQCxFElJAhBC`FCrDE|GCpFMzUAjAC|DCrG?lFE~BC~E@|AA`C@`@?rB?`@AvE?~@CbD?HAfI?xCAfC?pD?~@@V@l@?VBn@Bd@Dl@LzAL`BPxBAH?B@X@Z@d@?z@?t@A^A\\Cb@Ez@ANCNCXADGh@ETGZUdAKb@IVa@rAUn@o@|A_AxBcA`CaCxFk@rA{AlDm@xAk@nAA@sA|CMZYn@Yn@ADSb@GJ{@lB?@A@CPaEhJqBtE{@lB}CbHa@`Ai@nA{AjD}BhFyAhDgBrE{@`C[z@_@hA[|@c@nAc@vAa@tAc@vAWbAk@rBQp@w@lCe@|AABq@~BELMd@Sr@Oh@St@[fAsAbFe@jBQp@k@nBYdAu@fCOf@g@fBu@hCw@pCMh@Oj@On@Sz@_@dB[|Am@nCQx@a@lBYlAc@bBa@~AK^s@lCY~@Ux@[jAk@zBiAnEOn@iA|E}@zEeApFs@vE[rBK~@In@WzBIv@Gj@MfAKlASvBY`EQ|CIdBAVMhCGdBGlBC`BEpCAdACrAAdB?tAChAA`CAvAA`BClGAnA?x@SrZ?NEfCGvCCx@EbBIjBGzCIdBIxBAREr@IvAq@|M?@M|CMbDE|AGpBEdACz@Cx@A~@?^EzAAbACfBAx@AbA?l@A~C?pE?`A?hABhDD~DD~C@T?hBDdDTpKFzB@v@FlD@vCAxB?xB?jAAxA?bF?pE?|CAlG?~AAhL?zA?V?pG?TAfFAzEArB?FAl@A\\?^ATAVC`@Gx@Ch@AFE^ARCLIv@G`@Id@Gb@G\\Kb@?@GVI\\IZK^Oh@Up@Sh@MZEHGPqAtCuAxC_@bAi@~A[jACJKf@AF?F@N"
                     },
                     "start_location" : {
                        "lat" : 46.5875437,
                        "lng" : -90.95426209999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20.8 km",
                        "value" : 20806
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 987
                     },
                     "end_location" : {
                        "lat" : 46.7351868,
                        "lng" : -92.0977745
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eUS-53 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Subway (on the right in 13.1&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "yzm{Gv{}oPe@~Bc@vCa@pCU|AcAdHiAjHMt@[fBe@nCs@bEi@xCa@vB]pBaBfJi@zCAJi@xCq@zDWjAMj@Sv@Qt@M`@Mb@Qh@K\\Qd@_@dAw@lB}A~Dc@fAo@fBmA|C_@~@iAtCmAzCa@`Ak@xAuBrF{DxJ{D~JSh@gArCeApCc@fAUh@Uh@cAfCoInT[r@Ul@kAzCo@bBsAhD_B`EkAxCYt@}EbMQd@i@rA]x@mAvCeB~DGNWf@Uf@a@z@wBrEmA`C]r@_@p@yApCoBlDgB~CcBnC{@tAaD`FmBpCeBbCQTqAfBKJgDjEi@p@y@`AgBrBaCjCm@n@]^k@t@qCzCCDk@l@mE~EmArAoE~E}@bAyB`CwEhFeAlAiH`I}EnFwDfEmBtBm@n@s@p@W^k@l@kArAmArAiFvFuCtCEDgAdAcC~BIHe@b@cCzB{BnBeCrB_Ax@aAt@}@r@uEtDyD~CiFdE_BpAkCxBuHnG_PtN]Z_@ZsEbEg@d@kJnIqBhBWV_GjFwEdEoDbD_Az@YVy@z@yA`B_CpCwApBqD~E_AlAaFfHmDrEyDnFeBbCkEfGgBbCaBzBkDrEe@j@OTEXeHxJo@|@IJc@^k@t@_@d@EFa@h@aDrEu@dA_AtAs@dAY^m@`A{AlBuAfBs@~@iA|AmE~FyCfEu@dAENCL}DrFkE|FW^U^IJoBnCSXSVoE`G}CjEOTQXUHQTu@bAu@dAwErGkBjCuKdOkBhCi@v@]t@QTY^KNY`@IJUZoAdBqAdBi@t@gA|A_BxBwBvCmEdGiDxESHSVqEfGGLkA`BmA~AUZKNIJUZSZ[b@Y`@mBhCu@dAkA`Bs@bAUZQ`@yDnFkBhC}AvBgCjD{ArBoAfB}B~Cu@`A_@XmBfCyEvGqAfBoBpCIJqDbFeF`HmAfBkA`Ba@h@kBjCY^yChEuCzEgAhB}@xAkCnEkCpEiB|CiArBA@cBrCcBrCy@tAaAdBm@hAoC~EqBrDuA~BiApBqBdDYb@_@p@}AjCEHYd@uA|B_AzAiB~CsAzBEH{@xA_@r@sA~BMXg@~@sAxCa@`AeFvLu@fBu@dBoAxCq@bBWn@GJGN]j@Uh@]v@]z@[t@Od@Sr@e@|BMp@Gf@E^CXEd@Cb@Ez@Cl@AzB?V?tBAbL?H?`D?tC@hG?T?~@?nCAXATE`@I`@ITKPOVOPa@R]Fc@@e@@c@@O?CBGD"
                     },
                     "start_location" : {
                        "lat" : 46.60669009999999,
                        "lng" : -91.9086028
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.9 km",
                        "value" : 3942
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 164
                     },
                     "end_location" : {
                        "lat" : 46.7653238,
                        "lng" : -92.11956719999999
                     },
                     "html_instructions" : "\u003cb\u003eUS-53 N\u003c/b\u003e turns slightly \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eI-535 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-53 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Minnesota\u003c/div\u003e",
                     "polyline" : {
                        "points" : "}}f|G`zbqPoBAoBCoB?iC?]AM?Q?oC?uEAyBA}D?o@AgA@c@AkB?gA?w@@o@BiANc@Fc@H_@Hs@TSFcA^c@PiAl@w@b@_@R}@d@CBa@RmBfAuBjAULcCpAcCpAaAh@cB|@_@RcAh@sAr@MHkDfBu@d@k@ZuFvCaB`Ac@V_Ah@y@l@o@n@{@z@_@d@y@hAU^Wb@S\\[j@INe@~@MXWl@Wl@yApE]fAGLyAvEAD[|@sAzDeA`Ce@|@k@hAqAvBm@~@U\\}@lAMN{@fAIJoAvAsKhMkDbEw@~@i@n@a@d@a@`@i@j@s@t@ON"
                     },
                     "start_location" : {
                        "lat" : 46.7351868,
                        "lng" : -92.0977745
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 212
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 46.7659086,
                        "lng" : -92.1220364
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eUS-53 N\u003c/b\u003e, follow signs for \u003cb\u003eI-35 S\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "gzl|GhbgqPKPYb@QXOXM^GRELCLCLEPE^Ej@Cp@@f@@b@FhA"
                     },
                     "start_location" : {
                        "lat" : 46.7653238,
                        "lng" : -92.11956719999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.7 km",
                        "value" : 7740
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 312
                     },
                     "end_location" : {
                        "lat" : 46.73257570000001,
                        "lng" : -92.20082859999999
                     },
                     "html_instructions" : "Take the exit on the \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eI-35 S\u003c/b\u003e toward \u003cb\u003eSt Paul\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMinneapolls\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "}}l|GvqgqPDH@BTnAH^Jb@HZLb@BJHTL\\LZR`@BBHPLPBDTZ@?HJLNBB\\ZPNJJTN`@\\ZRd@ZTNDD@@DHf@Tl@TTLXJf@Tt@\\ZLHD@@@?HA~Ax@`@TVPj@`@VRDBPFl@l@VX^b@b@n@z@jAz@lANT~@pALR~@pA\\d@|BhDtApB~D|FxAxBdB`CXb@Zb@NTb@n@Z`@LPJPn@dAR\\Tb@HPP\\\\t@\\|@Tn@\\fANd@R|@f@tBJd@t@jDHZRz@XtANj@Nn@XfARr@DLJXNd@Pd@LXP^Th@\\n@PZFHT^b@t@`@n@lAnBZb@h@x@`@p@HJXd@f@v@x@rAx@lAvCtEnDtFVZp@dANTJPhAfBv@lAHNbA|Ar@hAfFdIpClEj@`Al@~@PV@DnAlBBDHLFJfBnClAjBhBnC~@tAJTRZRXp@~@d@n@JPfA`BFH@@JNvApBtApBFHZb@~@tAhCtD\\h@dAzAr@dAb@r@R^HJPb@N`@ZbANh@Lp@DRH\\Jv@Ff@Fn@Dn@Dv@@|@?\\?dAAR?XEzFEpDCtACfBEjC?@A~AAz@?r@C|BAnA?`@?d@CNCZ?FAd@A~AAd@?r@Cr@Ad@Cf@C^Gt@Gf@APKh@Id@Mn@AHK`@Qn@Wr@Sj@Uh@Yt@Sh@Ul@e@jAc@jAO\\k@vAe@nAWt@W~@Md@Kf@Oz@Mv@Ir@Gr@El@Cp@Cv@An@?t@?h@@r@Bj@Dh@Dh@Dn@D`@@HBVP|@Lj@H\\J^Ph@Rj@Rb@d@dAp@rAHNb@~@N^P`@\\~@HXTp@Nf@H\\Lb@Ld@DRF\\Px@VtALp@?@DXDTHd@NbARlAN|@Nz@N`AP~@DJLr@R`AJd@FTH\\Pv@Pr@Pj@Rv@\\fAVz@`@hAXv@`@jAlCxHnCzHlAdDN^BJ"
                     },
                     "start_location" : {
                        "lat" : 46.7659086,
                        "lng" : -92.1220364
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 190
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 46.7322353,
                        "lng" : -92.20318549999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e250\u003c/b\u003e for \u003cb\u003eUS-2 W\u003c/b\u003e toward \u003cb\u003eProctor\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGrand Rapids\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "smf|Gd~vqPJp@@D^jAJf@Jh@BX@JBd@@^?X?VC\\IdA"
                     },
                     "start_location" : {
                        "lat" : 46.73257570000001,
                        "lng" : -92.20082859999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "122 km",
                        "value" : 122275
                     },
                     "duration" : {
                        "text" : "1 hour 18 mins",
                        "value" : 4697
                     },
                     "end_location" : {
                        "lat" : 47.23591099999999,
                        "lng" : -93.51915049999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "okf|G|lwqPUfAWpA_@~AOn@Mn@K\\CNOp@In@_BfG{CvLMd@{ChL[fAK^Yx@Od@i@|ASh@Ob@Qf@CDQb@g@jAY^?@MVCBWf@o@lAGJk@bAe@|@S\\}AvCq@nAMXaAhBeBhDKRo@lAgAzBOXI\\}@fBS^q@pAm@jAWf@Uf@WXi@hA_AbBKRGJs@~@OPWVg@b@OJIPMFKFKFi@Ri@LQBIB[BO@S@a@?c@?{@@Y?qB@}@BO?G@O@KBI@MDQHGBEBMJGHST]j@MPaBnCe@v@OXa@p@OToBbD]f@sAvBg@t@m@z@QTm@r@u@t@a@`@o@l@_@X[TWPUNe@ZQJ[PA?k@X]P{Av@qDfBeD`BiB~@uBbAYNoB`AiB|@{@`@[R{@b@i@\\i@^c@ZYVUTYT_@`@Y\\YZ]d@SXKF[d@QVg@z@q@tAINCDELSb@Sh@a@jACHi@zAmBfGoAxDIZGXiAjDYt@Ut@e@pAc@rAO`@Sj@Sj@u@~Bi@|AIXoArDm@fBeA|CuBlGm@hBi@zAWv@ITa@nA[bAYx@?BgBfFq@tBSj@uBjGaB|Ea@pAg@vAg@xA}@nCq@hBa@fA_@|@[v@Wj@y@fBaAnBcBvCy@tAaBnCYd@iAlBgCbEcJbOeDpF_DhFg@v@}CdFaCzDgCdEsAxBU\\gCdEyCxEeAdBg@|@oAzBoA`CgAtB[n@MVc@t@CBsAzCeBtDYp@w@dBIRs@~Ag@hAc@`Ay@hBWj@iC|F{@nBKb@Uf@Uf@MTw@hBuAhDUh@gAtC_AbCi@tAABwA|DGN]~@a@fAgAxC}FxOwDdKoClHkEnL]|@_@`AyA~DwB|FeBvE}AbEs@lBo@hBoAbDaAhCIT{@bCs@hBSj@_@bAw@rBa@jAEF_@dAa@fA_@dA[~@M`@Od@W|@Kb@Oh@I`@K^Kb@Kb@Kf@Ib@I`@Mr@Mv@Ih@Ij@Gb@CXKr@E`@Gd@Eh@E`@Gf@Eh@C`@Ch@Ed@GlAGhAKtBKtBCf@IfBK`CGrACd@Eh@Af@Cb@Cj@Cd@Cl@GfAKtBMrCKvBMzBKvBIrBGnAG`AEx@IfBCv@AF?DALGdAO`DMxCO~CEx@ARQbDMtCI`BGvAQ|DQlDQtDEfACh@AHm@rMSbECh@GhAEn@Cl@MhCKtBKhCATSpDStEg@xKqBpb@yBhe@]rHQ|D_@tHCt@Et@GlACb@KpAI`AOdBE`@ETIt@YhBIh@]rBSbAWfAYlAe@bB[hAc@tA[|@Yt@c@fA[r@[r@{@dBQXS^w@rA}@rAQVUXUZSTEFy@bA_AhAQR{AhBKJ_BhB?@k@n@aAjAkBxBsA~AeAnA}@bA_AhAuA`BuA~AcCtCgBtBcCrCqBbCi@l@o@t@uA`BaAjAkAtAkC|Cs@z@wA`BeAnACBWZmAvA{AhBWVkAtAONeBrBKJ[^mBzBiDbEaBnBQTm@p@mDdEuAbB_@b@GHWXk@p@sA~Aw@|@KJsChD_Xh[kC|Cw@~@gD|DiCxCGHiArAaCtCiBvBUX}@dAeCvCsA~AiBvBcCtCoBzB{@bAuAbBk@n@WZsA|Am@t@i@p@i@l@aAhAsA~Aq@v@[`@EFwAbBSVcAnA_AhAoA~AcAnA}@fA_AjA_AjAwAfBORKJ{@dAqA~AcBvBe@l@_@d@w@v@YPUNg@^FrABh@HxANhBBXBV@DFb@BRDVHj@BNBLLr@TfAFTDTb@hBp@jCp@tCJb@J^H`@DLHb@DRFVBL@JH^Jl@DXLv@Fh@BLFl@Fd@Db@Fr@Fv@Dd@Bf@Bb@Bt@Bx@@X@j@@f@?\\?R?X?f@?jAChC?j@At@ApB?j@Ar@C|C?r@A`BE`IAt@ApBAh@A|CAd@ClEAfDA^AjBCzHAzAA`CCvDAlAEjJ?BAr@EpEEdFEdGApE?lA?lACVAN?~@AhBAv@AlAEhHCpFEvFEdGCbD?h@?\\CjEE|FAtCM|RErIEpDAn@CjAMlF?JOhGOfHKnGIjDK`ECbAAN?h@q@hOWlFg@tLOzCShEM~Bo@nNOzCSpEG`AS`ESdEIvBCz@Cj@Cz@Ct@CzAAlAAv@?`BAdB@dB?lB@rE@zE@zB@|@@dF@jE?zB@~C@hG@lB?zA@`G@fA@bFBzG?~D@zBBpK@nC@tF@`FDtRF`T?|@Jxd@Lhh@@rAD~UD~N?pCAX?|@Az@CbBChAItBGvAKvBQzCg@bJUhEQpCEr@Cd@SfDEr@Ev@En@KfBs@pMi@`J?FEj@OtC]hGADKvBI|ACf@Cl@?DCh@EzAE|ACnAAjA?`@?ZAvA@h@?`@?tAB|CBjGB|D?r@@bB@|A@xB?P?`@?VAr@EpBA^A\\AJCj@Ch@I`AEf@I`Ae@lGEj@]~DUnC_@jESbC[lDC\\UbCI~@Ed@q@rHGr@Gn@OfBOfBGp@CXCX_@lEGp@Gr@]xDGx@WxCGp@CZMtAMzAKdAOxAQzASfBK`A[fCIp@i@~E[`Cy@fHOjAYjCWtB]zCS`BSdBOtASfBgAxJa@lDSfB[lCIz@Eh@OdBIzAGbBCbAChAAlAA~@ATA~C?bBAjB?xC?pEAnJ?fGAjL?`BCrQ?b@A~E?hOAt@?rH?D?zGA`A?fAApNEhIIxP?FEpJEbGGzMAxCIvKCfGCdGE`IGfJ?NGhHKdKE|DCdDIvJCvAGzHAr@KtK?n@KbLC|AEdGIzIA^CnCAtBAfC?jACpH?|@AhEAzMEvREjT?nD?vCF|HFzHJbLB|BLtNTrWJbLLlOJnJJbLHdIJnJFpEB|CJnJHhH\\p\\HzHHtHP`PJ`IHbHX`WPxMX|UFfGHdGNvMR`QHfGJnJb@d^v@fp@X|UJlJFjDBvB@hEBfGBnJ@|E@dGFvRHrWHtWDvM?`FB~E@vHBjNDlOBnKBvMBdLBnJ@dG@hB@nJ@|CCvRA`K?jE?rE?z@AvK?zD?T@lO@pE?rE@dG?dG?tD?\\?r@EbBEv@EfAIfAKlAQdBUjBETUnAO|@Op@]|AA@i@lB[bA[z@_@bAUl@a@|@[p@Yh@i@z@o@hAOTeBrCkCfEyC|E_CvDyC|EkEfHgBrCqLpRyKnQuF`J_CzDaE~GoAfCaEfIqEhJgBrD{IxQy@xA{AdCA@mBxCuBrCmA~A{@bAeA~@u@t@yArA{AtAaCzBSR]ZyArA{AtA]ZwBnBwDjDwApAiIvH}BvByCrCcGtF_IjHuDhDi[zYsUlTuClC}DrDw@r@aA|@aA~@q@n@k@l@wA~AuAdB{DzEyFdHsInKeD`EyDxEgKjMiZz^oNdQsCpD{MrPsIrKkL~Nc@j@q@t@eArAoBdCkElF_BnBq@x@y@`Aw@dAUVeBvBaDzDcBtB}AlBmDjEwDvEiBzBsA~A}BvCgArAy@bAq_@de@_Yn]_AjAiB|Bw@dAeBbC}BbEaB|CyA`Dw@rBqClIKZsCzIuBtGkDpK]hAwEzNeAbDqD`LiBxF}D~LiCbI[~@}EjOqNpc@_CnH_Kf[oHjUcBlFkE|MaAxC]hAkAfDu@nBg@rAw@fBWj@[p@Q^]p@c@x@_@r@w@xAo@dAi@z@UZ]h@aAnAs@|@[^m@r@c@d@wAzAEDk@l@{BzBwBxBkFjFe@d@gEfE{JzJ}A~A}P~PgNfNqArA}DzDo@n@y@|@}@fA{AdBc@j@ORuAnBk@r@OTi@x@c@v@c@r@w@|Ai@hA_@v@Sb@Uf@cD`I_@`AsFpNsElLcEpKqAfDi@tAUh@wAtDaBbEuBpFITkBxEkC~GaAbCg@tAoFhNuDrJoAdDyAtDcEnKaChG}C~HaBdEgCxGc@fAs@lB{BdG_ClG}BfGk@|AkDxJaAlCSj@KXoBrFe@nAm@`BWv@_C|GKXm@jBQd@Sp@A@Ur@W~@ERYnA]vAOp@Qz@gAtFkA|Fi@fCCLIb@Mn@Mn@k@pCQ~@cAbFUdAiArFuA|GMp@I\\eAdF}AzHs@nDo@~COt@cAbFo@`DCLENGXi@tBW|@M^M`@g@zAc@hAiCfFELCFgAzAo@|@c@f@UVc@d@WX_Az@g@b@gBtAkCtByAlAqAdAaIrGsOdMc@\\wHjGsHfG_Av@qI`HwOlMi@b@[VmLnJyLzJa@ZyBfB}CfC}IlHuExDu@j@wEvDA@}BjB]ZYVcA`Ac@`@SRSTqB|B{@dAq@|@m@z@w@jAcA|Ao@dAQ\\w@vAYh@o@rAi@jASd@iAnCy@nB{G`PoWfn@eLpXsInSO`@_@x@KXm@tA[p@o@`Bg@lAu@fBsD|IsA~CSb@kDjIWn@cAbC]x@_@z@[v@Wl@Yp@Sd@Qb@c@dAk@pAWn@_AzBWj@{BpFkCnGw@jByAjDqC|G}@vBqJjUcCzFUh@cGxNc@fAwHxQm@vAw@lBeBbEe@fAqInSoKbWKX{FdNkFfMUh@_A|BoFnMw@jBmDjIiApCmAvCQ`@Q`@ELKVoDpIqDxICFuD|I_@|@mDpIiChGO\\qBxEqB~Es@bBWl@o@|AITWj@MXOb@Sh@ITM`@ENELERQt@Ol@]pB_@jC_@lCS|Ac@nDQlAOhAYrBeCfRs@nFGPABG`@uAlKSxAm@fEIt@SbBe@`DKx@OlAQhAM|@WpA[zAC`@A@Qt@K\\ENQl@Y|@Ul@e@nAS`@[x@oApC_@|@w@fBiAjCs@`Bq@zAk@rAi@jAuB~E[t@e@bAk@rAWj@qBvE[r@_@v@{AlDGNc@bAUf@qAzC{AlDIRgAfCwDrIaBxDuCtGeAbCw@lB{@zBe@zAKZUz@gAxD[hAo@lBK\\Ob@k@xA_@bAq@`BWp@_AlBu@bBaAnBWf@e@bAMXyBpEk@lA}@lB_AlBy@bB_@t@qCdGaBhDc@x@Sb@_AlBEFiCrFWf@{A`DgClFm@lAu@~AsAhCs@pAKNMTc@t@{@zAU^eA|Ag@v@[d@A@{@jAcArAyBrCgBpBCBkBpB{C`DGFcEhE{AzAk@n@qIzIaFhFGHkGpGaAbAq@r@ONeBfB}@~@wKdLGFqBxBw@|@m@v@g@t@MNo@~@_@j@S\\oBbDuA~By@pAaAxAqCxDaC|CyAnB]d@_@j@[h@_@v@GNKTM\\Qh@Ob@K^I\\Kh@Ot@Gf@Mv@Gj@C^C\\Cd@Ez@AlA?DAvE?~G?|A?~D?bB?`E@l@?PCfBCxA?JCd@G`ACb@E`@It@Gb@QlAQ`A[xAg@rB_@~ASx@s@xCk@~Bk@jC]~AQ|@WzAOz@Kv@a@hC}@vFuAzIkAnH{AvJ{G`c@YhBuA`JwFx]s@tEaArGGRGd@cCpOaAlGO`AG`@YbBu@~EiBdLg@~CEZw@|Eq@nEQz@Qt@Mj@W|@M`@IV[z@e@dAc@z@[h@S\\g@t@}@pAkBjCwAnBuBxC{@jAgAvAu@|@QNi@f@A@_Ax@iAx@_@Vk@\\c@TkDbBc@TiAh@yAr@oFhCqG`DGB}@d@e@XULgAt@}AhAKHg@b@c@`@i@h@u@v@i@j@WXg@p@m@t@W\\_AxAo@hAk@bAMVU`@u@bBg@hAa@`AUl@IT[z@[`AY~@{BxHkBrG_AjD}@zCkCjJsBdH{ArFeG~S{DzM_A`DyChK]pAQl@cAzDiAlEgAjEw@vCm@rBk@bBq@tBqAxDsAvDwObd@gE`MaBtEsHhTqApDwAbE_AjCeChHyE~MKRsB|FyAhEERg@vAsAzDkFfOe@rAcArCy@bCc@pAi@~Ac@xAc@~AU|@mBhHaAjDgAjDaAvCWv@gB`FmBvFM^wMr_@M\\k@bBA@i@`Bi@~Ag@dBY`A[dAk@nBm@tBsBfHqHjWu@fCOf@Un@GPM\\Wn@O\\Q`@[l@Q\\a@r@[f@gBbC_@f@[`@WZe@r@QZQ\\S^Q\\Yn@Sf@Qd@MZQd@k@bBy@~BSj@qB~Fk@~AaG|PuDpKgEvLCH{CtIWv@}BvG?@kCtHk@dB{@`C{@bCSj@?@Sh@a@lAy@fCe@bB}CbLQl@Md@CFQn@s@fCeAxD?@}C|K?@gBlGiIjZgBnGmH|W}H`YaKz^yCtK{ApFwAjFc@`BwKp`@sBrHEJ_CpICH]lAgBxGc@zAeBlG[x@[v@[r@Wd@c@n@g@p@EDYXi@b@e@\\IFGDWPq@Zu@\\eBv@mCpAcCfAA@iBx@k@VmAj@i@Xe@Xq@d@k@d@g@f@g@h@k@n@aAvAa@p@Wh@Ud@Ud@[x@[x@Ut@Uv@YjAQx@Mx@O|@ALG^CPI~@CVCd@AFCl@Cv@Al@Az@?tA?p@?jD?rB?jBAtAAz@Ev@?DIrAIlAKfAOjAQfA[|AeAvEiA|EWfAkA`FaAhEy@lDUbAERAFQn@Ot@CJmBnIu@dDc@nBs@fDS|@_@`B_@~A_@|AS~@Ol@_@`BAHK`@Ml@YlAOn@oBrIwBlJeAnEg@xB{@zDkB`Ic@~AUt@Wv@Ul@Yr@aAjBc@r@m@x@g@h@UVs@|@_AfAs@v@{@~@OPGFWPMDMBUB"
                     },
                     "start_location" : {
                        "lat" : 46.7322353,
                        "lng" : -92.20318549999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 km",
                        "value" : 3729
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 302
                     },
                     "end_location" : {
                        "lat" : 47.2409435,
                        "lng" : -93.566413
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNE 4th St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by NAPA Auto Parts - Auto Supply Of Grand Rapids (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mwh_HtmxyP?lB?\\?N?n@?`BAzC?zCAtC?vC?rH?`A?pAA`@?T?fB@tB?\\?J?n@?|A?xA?fA?h@?lB?pCAjD?hC?r@?hBAbD@f@?fBA~F?x@?pCAzC?`C?nC?lC?|CArC?~C?zDClBCtFAdA?RAnA?T?b@@fA?lA@`E?hB@zC?D@jCAzC?vC?nCCdDIxBA\\Cj@KnBSrC?B?HCTC\\i@vEEXE^O`AKl@Oz@I\\UpAm@pC[rAi@xBQh@Ql@ABW~@Sp@M`@]`AWt@[|@Yp@Yd@KVYn@i@lA]v@aArB[n@w@~AaAtBsApCi@dA"
                     },
                     "start_location" : {
                        "lat" : 47.23591099999999,
                        "lng" : -93.51915049999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 105
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 47.2415537,
                        "lng" : -93.5674661
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eW United States Hwy 2\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{vi_H`uazPi@fAoAjC"
                     },
                     "start_location" : {
                        "lat" : 47.2409435,
                        "lng" : -93.566413
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "249 km",
                        "value" : 249165
                     },
                     "duration" : {
                        "text" : "2 hours 31 mins",
                        "value" : 9072
                     },
                     "end_location" : {
                        "lat" : 47.7737941,
                        "lng" : -96.6068377
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eUS-2 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eW United States Hwy 2\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow US-2 W\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dairy Queen Grill &amp; Chill (on the right in 178&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "uzi_Ht{azPu@xAc@`AsBhEeAvB{D`Ik@lAABAHERQ^sAnCc@`AkCrFmAhC_BjDyA|CaBlDoDvHy@hBs@~A{BzE[n@STCBS^]v@c@bAo@pAg@rAy@xBMZK\\Qd@wAzEa@pAMb@e@lBm@nC_@`BKf@CH?H?NMh@St@yAvGgA`FyC~MyClMcBzHoArFiDnOoB|Iq@vCeA|EK`@mAtFuBhJu@jDgAvEeAvEgAxE_@zAU~@W~@W~@ELM`@Sn@GR]hAs@|BO^mB~Fo@lBcAdDqAfEs@rBM^Wt@e@xAUx@K^?@Ol@m@dCk@|C]dB{@nFo@tDs@vDk@rCy@tD_AhDiAxDgBzFUr@_BdFmBpGc@bAoD`LGNuBrGqA|DsBhG}HxUiAhDkAhDgFpOkHnT_IlSoBlFwAlEqDvK_ApCq@vBaAnD}BfIsBhHoKv_@}@bDaAlDaAnD}ApFwD`NuDzMgFjQi@jBsCnJoAfEyFpRaCpIqH|VgEpNiAzD}BzHcEpNe@zAa@lAM`@KV_@|@[n@O\\e@z@i@bAk@x@k@v@i@p@]\\s@n@m@f@e@ZiAv@oCdByBxAq@b@yBtAaJ~FoErCm@d@s@f@aAz@]X_@^YXUTu@`AED_@f@]f@a@n@i@~@SZUb@Wh@GJUh@MTKZ[x@[x@m@`BqB`GiCzHy@bCOb@iCpH{ExNs@vBiAfDgA|CaAxCgGxQiGzQo@nBoExMI\\sAtDu@zBg@zAcBdF_ArC]`AWt@k@dBaAvC}AtEyBrGSl@aApCsAdEg@zAgCxH}@hCmCbIwAdEw@~Bq@rB{@lCkCtH_@lA]~@]hAY~@Ux@YjAU~@UbAMp@Ov@Ov@Kl@Mx@OfAQlAK|@Ix@It@Gp@CVCTA\\En@OrCWbFMhCw@zNC^m@zJIzAKhAIhAKbAOnAo@hE]~A[~Ao@~B[dA]jAe@rAUn@Uj@_@|@[t@c@|@Wj@a@r@U`@U^Ud@e@p@]j@_@l@g@bA[n@Sh@Ut@M`@Sp@K`@Kb@Kh@Mn@Gb@G`@Gd@CZCXEZARARC\\Cl@Cj@Gz@Cv@Cf@Ch@Cb@C^AZCh@QjCAl@El@Y`EM`BIhAOrBMpAKpAUtDU`DEd@Gn@Ex@GhAQxC?ZCr@CdA?vA?X?V?T?pA?r@?x@?r@?Z?`BAzC?`CA`AATATARATCZIh@GTERGTGRGPUh@Sb@u@bBgAdCu@hB[r@g@rAUh@MZIXWt@Od@Of@Sl@Mb@uBzGOf@cAdDUv@Y~@k@nBcAhDe@~AkAxDMd@gApDu@bCYdAU~@Op@Ol@Mr@WnAIPCNIj@Kj@G^Kr@Il@Ij@Gb@Eb@Kv@Ep@E^C^C^Ed@Et@Et@Ab@Cf@Cn@AZA`@ChAAlA?Z?Z?pA?x@@Z?n@@X?L?L@b@Bf@@h@Bj@?B?B@B?DBNH~BFtA`@jL\\|IJhCBr@P~E~@~VhAfZRpFj@fPDfAVhHRxERnF\\lJPnEf@zM`@~KTjGRhF|@hVlA`\\FrBRpF`@jLDr@ZnIJhDh@xNxAb`@NdEZfIJzBL~DT|F?HLlDVdHD~@FtAJpCRzFB`Ah@rNJ`CFzAFjAD\\Dn@Fx@Ht@Dd@Hl@Hf@Fd@Lv@Ln@Hh@Jd@Nl@Rz@Jb@Nf@X~@d@zAlAlDX|@r@tBv@~BZ`Az@dCrA~Df@vAX|@v@`C@BlAnDtAbE|B`HxBtGNb@Pj@x@dCNf@xAtEr@|BtDrLbCxHbBnFHZbDfKfAlDZbARp@Pl@XhALh@Jb@Hd@R`AHf@Hf@D^Hf@D`@Fd@Hv@Dd@Df@Dd@Bh@Dn@Dt@Bp@@d@BrA?x@@`A?r@Av@Ar@Al@Cv@Cv@KzCUlGKrCItBSnFQhFCr@Ct@GzA[jI[vIKtCOfEKhCCr@EfAEvAEjAElAQjEW~GErAEjAEzAEtAA~@An@An@?|@Ax@?fB@lC@zCBjE?jA?b@Ap@?d@Aj@Cv@Av@Cz@Cv@GlAKdDOpDOzDQ|E{@vUE`AOjESvF[nIU~FSzFa@lK[|IAL_@dK[lIK~CMzCWdHaA~WSlFElAEdAOfESjFCn@WnH[lICn@UjGG~Aa@rKAXa@dLCd@u@~RYjHSfF]`HQpDIjB?@GpAG`AUtFYbI]`JWdHEnAw@~Sy@zTAh@[zHCr@KvCSlF[zIYtH?DYzHUfGIhBa@bLAd@u@nSg@`NGxAS`Ge@rMAJUjGa@vKYbIEjAUbGUjGK~CGnAS`FQhE]hHqB`e@UfFI|BQ|D?TYlH]fKa@zKc@pLyA|a@QzEGfBMlDOfEGlCG`BKdDGtBI|CCr@CbAU|HStGUfIQjFG`CANQpEMdESlF[fIIlCM`DAP[dJQdE_@pKElA[tIIbBOfEOdEK`DM~CUlGKfDMzCK|BI~CMvC[|IWfHSjFSlFOhEGzBKtBM`DI~CGlAIvBM~CQlFMxCExAIxBMxCK|CQlFKdCIrBGnBIxBIvBM`DMdDM`EIrBGxAKzCKzCM`DObEM`DY|HEpAShFUxGMbDSjFi@nOSlFUxGM`DObEOdEOjEIrBCt@GhBY~Hc@tLIxBKxBMdEE~@GzAIxBObEStFSdGa@`LMfDQbEA^GnBIlBCdAC^EpACj@MbDS`GEx@KvCEvAIxBMzCYzHI|BAPAXOpEEbAQxEO`EMtDEpAEz@GfBIrBEpAIvBK`DWrG?NKrCQhECv@KlCEnAEnAEjAGnAMhDQfFM`DIvBUrGKbDCb@EnAEtAIrBGxBCd@Cf@GpBCn@GrBItBMfEIxBIpBEpAEpAOdEEnAShFIbCIrBIvBInBGlBMtDE|@?POdEM|CEnACj@K|CGdBI~AShF?FMrCM~BQ`DWjFUbDIxAYjFAZKvBMrBQ~CKtBQ`DQ~CAJW`FUfEc@|HOpC[vFy@xOAPg@zIQbDEp@S`ECb@Y`FQlD_@tG]xGKbBY~F[jFYlFQ`Da@|HQzCMrBUjEYjFUhEGpAU~DaAtQa@rHc@dIc@~HGlAYlF]nGi@lJKtBMpBKzBG|@S|D[bGOpCOdCa@xHCj@MtBI|AEbA_@vG_@~GSvDyAhX[dGYpFg@~IKxBMxBKrBMvBMvBKnBCr@QvCUhE[vFi@jKMvBOlCARQ|Cs@hNEL?@ItAGlAWpEADYrFi@lKGhAIzAAPIfAI~AGnA?TOpCQhDE|@SfE_@xHIhBI`BQ|CInBItAInAKxBQ|CYpFMrBOvC[tFe@`ICTEr@eA|POlCc@xGOvCItAa@rGQ`DGjAGpAE|@_BpYInAInAGnAQ~CQ|Cc@~HMtBg@bJAHOtCMvBMrB_@xGALEr@_@`H_@xGUdEi@|JEv@[lFEt@IvAKxB]nGOdCMlC_@bHC\\YlFSbEUlEItBGnASpFUjFSnFQfECt@E`A]`IO~C[bGSrD]vGKpBMxBUfEOtC?FM|BQ~COzCQ|CS~CWlFMvBSxDI|A?HMjBa@|H[~FCZcAnR]nG?PWbEa@|HQ`Di@lK]rG_@vGGlAEp@C\\KrAQlBGj@OlAOlAQjAYlB?B[pBQlAQfAc@vCYrBSnAYlBYpBSjAQlAAJWbBQlAQjAOnAAPKv@KlACf@El@EfAGpAEnASpFAf@MvDQpGc@rLK|CM`DObEKbDSlFOdEOnEEt@?NUxGIvBOtE[zIATm@~PM`DIrBOfEQnFIvBOfEK~CEfACn@EvACfAC~@Al@?HA|@Cz@AhAArAApACvB?lAA`F?hFAjFEvVAnH?r@?`CCbRCbNC|QC|LAdI?bDAbB?jCCdPArCAlKApCArD@bAAtBAdBAhH?bDAdD@bD?B?zC@hE@pFDtKBjJ?~@@bG?bD?d@A|G?fEA~FAdFArB?pFCdNCrKAjJA|IAhDApJ?jEAvG?xAAbJCtG?xGAnEAvC?vB?rBAnCA`J?zBArC?JAxH?pFA~H?rFA`D?`B?fBAvE?lBCvG?|@A|@?`@Ab@A`@Ah@Ah@A\\ATA^AREv@Et@Gv@Ej@Gt@E^E^Ir@Kx@G\\?FIh@Q`AMn@Ib@Ib@WfAKd@Kd@Mb@g@fBg@fBi@jBIV]pAWhAKb@Kd@Ib@Kh@Gb@Id@If@Gd@Gf@Gh@Gb@Eb@SrBk@fFa@dE]xCa@dE[vC]zCUzBEd@M`AIz@UtBUvBs@fHYjCSnBO|AQbBOlAMlAi@hFGf@[xCa@bEOdBO|AIz@Gx@KhAKtAGbAEb@Et@AHOlCEl@Cr@MbCQ`EWvFOzDOhDQlDCz@KjBItACr@MlCQnDQtCE`AGr@YdEq@nIShCWzC]dEa@hFI~@e@zFgA|Ma@vEEf@EL?BADADAFAHANOpAYpCShB_@tCOlA_@zCEVmA|JQ|AYbCKt@Iz@I~@It@G~@Gz@Gz@Gx@Cn@Er@GnAEfAATK`DEdBEzACpBCtACfA?FAr@A`A?l@An@AhBChGEvFAfDA~BAlAA`B?fBA`AGvFA~AAz@?rAApA?\\?|AA|@@hB?dB@~B@fD@bBBlC@v@HzEBzABlBBbAHtF@XFrD@~@BpADrCD~BBhA@nA@V@nADzB@z@JfGLvIJfGTlNHdG@f@DfCFrDBjA@l@DbDBrBBrADtA?^H`GPbKHrFF~FBtBBhC@z@BlD@jAFbGh@`s@DfFDpDBfEDzD@lA@dB?h@?r@?tAAv@?p@Az@Ax@EnAEfBCbAGdAGnAK|BC\\SjCMzAA@MrA_@fDQpASzA[pBQ`AWvA_@lBa@jB[lA_@|AMd@]lAi@dBeAfDgAfDo@pBCJwAjEkB~FyCfJqA`E_B`FSl@yArEWx@Yz@y@hCUt@aAvCeAfDYz@_BbFkBzFm@jBe@xAq@vBSj@_E`Mq@tBe@xAOn@m@dBSl@Ut@oBdG{AfF}@pDs@fDQ`AYxAa@zB_@lCY~BWdCGn@]lDOtBG`AEt@Ch@GvAG`BCr@Ah@C|@AdAAp@Ax@AbA?rA?rA@t@?`@@j@BfB?r@B`A@pABvA@h@BhCFvEDxC?DF|EBjBBxEB`H@jE?tC?F?vAAxAA|EAbECpHAxDCrDAvCAfDAtDAbCAtB?h@ApBCxBA|BE|C?JCrBC~BGzIAbFA~@AtB?tAA~AAjB?vBAtB?FArBAlCC`I?h@AvA?xB?Z?hB@vB@rABrB@~@@vB@RD~DDnC@hB@bABjB?v@@`BAbC@bAAxCApDCjD?rAAzC?VAf@?jAAnA?vAAjA?pAAtBAtA?vBAH?fAAdB?f@A|A?tA?pAA|@AlDAnA?rAAnAA`B?VApGA`CAxB?`AAf@?zAAvB?n@AjC?XAnCAtB?R?fAAxAAxA?t@ANArAAb@CnAEpAEtAEt@GdAKzAM`BI`A?FQlBWbCIv@SzAQtAU|AMp@M|@Q|@Mp@ETWlA[xA_@|As@rCk@lBIXg@~Ak@fB_@bAO`@a@bAo@|A_@z@A@[r@Wj@w@~Ac@x@a@p@g@|@e@t@GJsBbD}CxEyA|BmAhBuBdDuClEQXgAbB{F|IOVmBvCaAzAiEtG}CzEqB|CuI`NqApBoBxCuKnPqChEsApBSVsBtCw@bA[`@iErFoBdC{DbFsBnCeAjAYZs@x@mAhAe@b@q@l@sB`Bs@j@o@`@_BbAgBdAiAh@oAn@cAh@s@b@yNfIaBjAy@t@w@x@_@b@a@f@g@v@e@t@g@dAUh@Sd@Qf@CBGPGRY|@Oh@I\\Mh@I\\S`AMv@QlAMjAKrAIjAEnACbAA|@CtEAnEAdDCzGA`FCpFGbRCvCMn^G~NAr@?b@AfDA~FAp@CrH?nCAr@?lBA|@EpHCvBQrESzCWvC_@|Co@zDw@zD}@rDy@dC_AfCq@bBs@zA}AvC_BrCw@|AuAdCiCvEc@v@ABg@z@i@bAk@`AYh@a@r@CFgBdDw@tA_AbBg@~@gApB{CtFSZuBxDa@p@{@~Aq@pAkBrD]r@e@dAu@~Ay@hBe@jAi@pAs@fBeBrEw@pBqBfFeBjE{AzDqClHg@pAUh@}AxDq@~AqCbG{@hBw@|AyArCy@|AwAdCiCvEeBzCcAlBy@vA_F`Je@v@Wd@w@tAmAxBaAfBaAfBw@zAeApBeC`FuIdQqAjCS^k@fAg@z@g@x@e@v@U\\{@pAi@t@i@r@SXaAjAo@t@g@j@g@f@y@x@YZcA|@g@`@m@f@SNa@Z}@p@u@f@{A|@yBjAyAr@qAh@_Cx@k@RsA^WFaAX}JdCwD`Ay@RIBeAXeG|AKDkG|A_AV}Cv@m@NmCt@}HpBuA\\eAVeARwAV[Fa@F_BTUBk@FaBNkBLm@D}@FE?K@q@DqDXwCRqG^i@De@BuEZaJj@iEXk@DQ@iBLg@BuJn@_Hb@i@DA?_@BeCPuDVeCNqAHa@Bc@DoAHu@Fi@DYBYDUDSDi@J]JYHWH]LWLIDKD[Na@Ve@Zw@h@eA`AGDe@h@QTSTe@p@_AxAs@vAg@hAYx@Qd@[bAADYbAWjAMp@YdBIf@Gb@E^MzAGjAGxAIpBQbEGnAGlAQpBI|@Mz@UzAIh@s@rE{AxImCfPcFnZsFn\\[~Au@bFyDjUQr@aAbG_CvNcAtFk@jDw@tE}@rFy@zEc@jCy@|EoBlLy@fF}B~Ms@hEaDnRe@rCw@|EiF|Zk@tDe@hCSnAO`AIf@Kv@MlAIdAO|BA\\M|CAn@Ad@?x@?\\?t@?J@pBDnA@l@Bh@?HF|@PjER`FBt@RpEBt@Dr@@j@Dt@DfAF|AZ|HFrAFrAHtBHrBNhDPjEBn@TxFPfEDx@L|CD`ADxAFtABrABjA?R@`B@bBA|BAnJ?zAAdHAhF?BAjD?|EI`WEhQIbWElP?`@C|GE~LEjQApEIjZAnE?pACxHArFAhB?v@?|E?~CA|E?~D?|@?|EAtJ?|FApDA~CB`FAjDC`KGrUCrK?jAAVAj@?d@Cf@A`@A`@GbACn@Gr@Gx@It@Gr@Kv@M|@If@Mx@SdAEPMn@Sx@Qp@]pAYz@Yx@uAlDsA`DiBnEmAzC_@~@Wr@Yz@St@Of@Qr@YlACHKj@SbAQ|@M|@Kx@Kr@Iv@Gp@Gl@Gr@Cd@Cb@Cf@Ch@Ad@Cj@Ah@Af@AlACpD?n@C`DEhIEvJCfEA`DC`FEfHG~LC~FAjAE~HCfFCpE?~ACzFExGCdGEfJC~GCpCCvFGrNEnIGtLC|HEbGApB?VA`AAdA?VCvACtBIdFE|CAbBEjGAdA@pA?~@@d@?f@BtADbC@d@?TBvABpABdA@|@?x@?b@?RAhAA|CA~BCrDA`EAlBAhACtD?HAdBA`A?FAf@Cv@CdACr@EvAE|@Ep@Ep@GbAWxDSfC[dEC\\[zDWbDaApMq@rIATm@xHEj@m@`IIdAkAlO}@nLy@dK[`Ee@jGu@tJc@lFYtEI|@U|Ci@zG}A~RUzCs@bJiAxN}BnZIx@cB~T_@tEAR]dESzBc@|DkA~JoAvKeAdJyEva@aIxr@mCxUyD`]s@hGCVk@bFGx@KrAKpBGrBCdAApAAx@@tAHpDrAp^RjFlEzkAVrHv@bSF~Ah@zNPzE`@xI`@jGX`EJfBN~BNzBFtAHrAF~AHxAVdHJzCLnCVrHL~DFtBDfF@rECfDE`GIjMCjDG~JOhTS~_@Yba@YtXGjEOrNQ|QG~DEfEK|KCzEKnMWf`@SlXCzFA|@?dE?dD@xAB`J@zEHpULh`@HrV?`FBvFBdK@`B@bG?v@ApAE~DOtEO~COzBQhDAPWlEg@tIk@nJUxDs@rLUzDEfAGbAOtBKlASvB?J?BOtAIn@OrAu@bFc@tC[rBW~AUxA[~BOjAM`AGp@SrBIpAMtBEzACv@Cv@Ax@Az@A~A?bBBtA@fA?HDpAHtBNhCHlAVrCNjANnAPfAZnBTnATdA\\xAZnAj@rBb@rA`@jAb@jA`AzBvA~CbCjFfBzDnBjEnA~ClAdDz@pC`AdDV`AjAvExCpLhAtEl@~B^vAjAvEb@dBr@fCfArD\\hAb@tAxB`H|BlH@B`AvCFPFJLVHZFVBRBRHl@Fv@Dl@Dl@@`@@f@@fB?zC?xC@rH?tH@nH@hH?nH@vHApDCpAAd@IpCK`CEz@AZEz@CzAAfBAf@?vC?xL?|B@dK?~I?~H?hD@Z?v@?fAAfA?rA?jG?bEAhDAfCGRANAd@GjACd@Gf@Gj@UfBc@xCkB`Lc@zCy@fFG`@gB~Ky@bFqClQoB~LwA~IcDpSy@bFmBvLaA~FoCbQWpBE^Gj@C^KzAE~@CbAAlB?|C@vA?hG@jG@rO?~HBlHAnG?hE@rB@`G?hG@|HB`Y@bI?t@@rJ?~HDvVArH?rf@?tE?t@?rE?t@@~C?t@?rJ?t@?~C?rE@tOCpHBdJ?~G?na@?jG?|M?jG?rE?~R@rT?~I@pG?zP?~H?hG@~H?~H@hG@~N?tE@r@?~D?rJ?xC@zC?x@@rDAfF?rEAr@?bD?nA?tB?fE?lE?hE?dCAtB?rH?|F?vD?V?|G@|J?n@@`EApC?h@?tA?f@A`@Cf@Aj@Ch@?DC\\?HEf@C\\Cf@Gh@Ej@G`@Gp@IbAMnAGh@Eb@Ej@C^AFCb@Ch@Cf@Ah@Ab@Ah@Aj@?j@?jA?zC?nB?bB?hE?`A?nC?`@?tA?hA?n@?b@?f@?l@@h@?d@@b@@p@Bd@Bh@B`@Bj@Bd@Dj@B`@Fj@NvAPjBJhALvAJbADh@?FDd@Bf@FfA?H@`@Bd@BxA@d@@f@?jE?hC?X@xG?nF@zF@jF@tE?`@?P?jC@lEBrHBdG@nF@tFBnI@t@@lH@pD?jFBpB?hDBbE@lE@zE@rC@fFBjF?xE?lE?hEA~G?zBArB?tE?|C?hAAlA?p@?dD?hE?|@?v@A~C?rH?~GAhFDrCFbDFxBDnAH`D@`@@p@H|CBlADtA?`@BpA?tA@~@?P?jA?JKtJEjCGfFCxACtACrACfACf@GrAA`@Cj@MtBS`DWfEYpEIdA]rFStCUnDY~EYdES~CS~Cc@~G]fFO|BMpBEr@G`AEb@Ef@Gd@Il@?BQbAIb@I`@Mh@Md@Mf@[|@EJYt@qA~CUh@mAvCkEnKwCfHaCzFm@xAqA~C{ApDg@lAaB`EcBbEcA`CcCbGsB~Ea@bAgAhCiBnEuAfDgDfIm@rAiErKsAtCo@tAk@dAs@rAqAxBsLjQoBpCoAnBW`@kAfB{AlC{LdU{DfHABcKlRm@hAyAjCYn@cB~C{@|Ai@`AcAnBQ\\QZSb@Wn@IN]z@Yt@_@hACJY~@_@xAy@hDcE~P{BlJa@bBwAbGWfAe@nBsApFg@rBu@nCmAbEmAdDiGtOQf@CDaA~BmAzC[t@gInSyBpFiBrEwElLuAhDyArD{AvDWn@_@|@Q`@mBvEuAhDcC|F}@zBYl@]x@aFxLw@hBWl@]|@qAvCO\\G^cBdD_CpEmBrEm@~A}B`G{BzFyBzFwBrFyBxFwBzFw@`Co@rBUx@u@dCKZu@zBKVMb@KVGPu@nBWl@cAhCeBdEW\\iCbGyAlDYl@w@jBADm@xAM^O^Qb@_@bAOd@k@|AA@?B[z@a@jASr@a@lAQj@KVg@fBOd@]hAYfAYbAa@|AOj@u@vCU`AeBtHoAnFeApE}EzSOn@cAjE{BtJqExRaAdEOn@On@iD|N}@~DwAdG}CzMuE`SUfAo@lCIXg@zBwAbG{@jDi@nBK\\YdAi@hBi@dBgNtb@qA~D[`A_@hAeBpFgBnFcCvHgBlFoD`LgKr[Sj@sBlGgAjDCDeAfDiAhDsBpGgBrFM\\qAbEsA`EoCnIIVyB`HwAfEABgAhD[bAk@bBkAfDe@hAKXq@`BkDfIw@jB_AzBy@~B{@dCk@fBiCbI_@fAyB~GaE`Mi@~Ay@hCoA|DuAfE_ChHgBrFi@bB[`A]fAM^O`@Qb@_@~@Q`@OZUb@c@x@c@t@OVEHUZ]h@]b@g@n@e@h@s@p@eAbA]XcA~@wAnA}AtAo@j@o@j@m@h@yApAIHg@d@m@l@c@f@]b@UXQXk@|@_A~A[p@_@|@_@~@Ql@CD[dAQr@Md@GRQn@c@jBK^mA~Ee@jBeAbEk@~BoElQiApEOl@m@bCg@vBU`AcAnEgAvEaA|Dm@fCwAvFgAjEkCnKcA~DoAdFk@zB}@nDqC~K_ArDq@rC[nA_@fB_@pBSfACLEVKh@Ih@OfAQjAOfAYfC_@tDmAnLeAfKsBbS_BnOEh@}BrTOvAwCrYAHk@vFg@`Fw@tHIr@[xCo@pGYhCCRa@bEWlC_@lDOpAUhBQhAUrAUpA_@fBKd@CHc@fBa@bB]nAOl@EP}@hDCFMf@kAtE_ArDiBbHiAnE]tAK`@cAvESfAQbA_@tBUdBu@dFMt@UtAQ~@c@xBQ|@On@u@`DSv@a@hBm@dC}BvJqAjFy@nDeBlHYnAsApFWfA{DjPEPOl@_A~DYlAe@fBu@hCM`@Mb@Ob@Mb@i@xA_AnC[z@kArDm@lBg@~AW`Ak@pBGPu@rCw@~CUbASt@YjAiAxEYpAOn@cDdNiAzE_AvDqBjI?BiCrKg@vBCH}AdHu@tDOz@Kr@UvA[tB[`CEVGj@Gf@UhBOzACRIx@C^MtAY~Cq@nIUnCY~CQtBOtAE`@CLMhAQnACLM|@[rB]lBKh@Kd@e@|B[rAMh@s@pCg@hBc@|A{GfVg@hBcBhGQn@U~@cApESbAw@lDo@tCCHe@nBi@pByAjFa@vAUr@{AjFaB~Fu@fCiAzDg@`BAFwAvEuArEyDbMs@xBiG|RWv@]fA]dAEJ_@bA[v@KPg@fAUb@S^Wb@KR{@pAo@|@uC~DsApBYb@MRYh@s@nAS`@GLQ^Wh@Uh@IR[p@M^Yr@yA~DoApDw@vBe@xAu@tB}BrGs@rBo@lBcAdDSz@a@bBQ`ASbAMn@Kp@Y`BET]rCwAtLKr@aAfI_D|Wc@jDiCfTg@`E}@~HeMzdA_@vCoCfUa@fDq@vFuAbLMbA{@dHgAdJIr@m@|Ea@fD{@fHeC`TkApJo@pFi@nEWlBOxAUvBUvCUtCQhDgAdTWhFcB~\\iDrq@OzCCl@GdBG|AEhBEnAK~CGrACz@IhBEv@KzBc@vIi@|Ja@tIeBv]Cj@GzAa@rHIbAIjAE^E`@Gn@Gd@ObA]xBKh@Kb@_@rAa@nAwDlJmKnWgCjG_AzBeAlCSj@gBhESb@Sd@KXk@xA_@pAQp@U|@UfAMr@Kf@M`AObAGj@Ej@K|@?JE\\ARAREv@Er@GjAOvCMpCCh@U|EGlACf@APATCVCVIdACRCZG^Eb@OfAUrAUjAQt@WbAMd@GTIXELKXIVQf@Up@g@lA[t@m@vAWl@yF`NcFtLwW`o@iWvm@aGpNyE`LgF|L}DtJoHfQeHzPkd@dgAeF|L{AnDuGxO{K|WyDfJCFo@~Ao@`B_@`AkAzCEJiAzCa@dA{A|DmBlFoGtPgBxEUj@{@|BwEbMsArD_EpKsEzLuOza@qF|NgQfe@Sj@Uj@Sj@oAfDoAhD}@`Cq@fBO^kBbF}@`CmAbDa@bAk@|AO`@O^O^Ob@M\\O`@O^O^M^a@bA]`A_@bA_@~@]~@]~@]bAM`@M`@M`@Of@[dAY`AI`@Mb@Kb@Mb@Kd@I`@Mj@I^Kb@Kf@Ib@Id@Id@Ib@Kf@Gb@Ib@If@Gb@Gb@Gd@Id@Gj@Ih@E`@CVCPMhASrBEh@KjACf@Ef@Cf@IpAIlAItAIhAEv@CTCf@KzAAXMdBSjDm@`Jc@~HSxCm@`Kq@dLInAShDS|CMvBa@xGMpBGnAElAGnACpACh@?`@Ah@ChAAbBA`DAhD?lDA~I?R?lA?rEE`^?r@En`@Eli@AtN?bHCpOAnL?`B?fBAjH?xBAjFA~HCpSGxm@?lAAzB?pA?pA?F?fAAbD?hC?VApA?f@?f@?f@?R?T?f@ApA?nA?h@?v@?tBApB?lA?tFApGAjCAhF?pBAf@Cl`@A`IAhn@Ane@Ad{@?v@Atc@?x^?`S?fW?lH?xY?dg@AzLAnQAtJAtL?jHAvl@?vT?|u@?hK@tbA?rOAl^?`D@nE?fF?v^@pj@?|O@vT?`N?zHA~n@?dt@?jN?|D?|A?hHBzg@BnY?fb@BxUA~GDdu@BtQ?fD?rJ@pF?z@@bBDjA@f@Dn@FdAFl@JnAL`A@JXpB`@nBd@lBd@~ABDtA|DzBhGvBjGPj@Lb@Lf@b@dBXrAZlBH`@Ff@Fd@LhAFf@LnABb@Dj@Bh@Bd@FpADtA@jA?h@?hAAxBEpAErAGpAE|@YfF[jFe@tI[tFc@~H_@tGCb@KvBQ|CMjB{@dPYbF[tFk@hKg@`Je@dICf@_@vGYjFUfE_@zG_@vG[`GCTQ~CEfAWrEOjBEn@E^In@G`@Gf@I`@Ih@Kb@I`@WdA_@hA[`AWr@i@hAS^S^c@r@_@j@u@|@UXKLQb@cBlBoAvAc@d@uBxBgAhAiAnAcAfAST{@|@kBrBaAdAsBzB_@^}@~@e@f@y@v@{@|@yCdDuEdFm@n@{@z@]Z[TSNIF]Pi@TQHk@V[PYRc@`@A@[^Y^c@t@MZO^Yv@_@|A[jAa@|Aa@dB"
                     },
                     "start_location" : {
                        "lat" : 47.2415537,
                        "lng" : -93.5674661
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 575
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 47.7783626,
                        "lng" : -96.6032197
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eyqbHvoslQqDkCuDoC{DsCwDmCwAgAu@i@g@c@"
                     },
                     "start_location" : {
                        "lat" : 47.7737941,
                        "lng" : -96.6068377
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "308 km",
                        "value" : 308041
                     },
                     "duration" : {
                        "text" : "2 hours 59 mins",
                        "value" : 10734
                     },
                     "end_location" : {
                        "lat" : 48.338235,
                        "lng" : -100.4047996
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eUS-2 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering North Dakota\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wurbHbyrlQo@dCq@nC]rAa@|AQn@]vAa@xAU|@[`Ak@jBKZI`@YfAe@jBUz@oAzEIVSXi@J{@@A?o@?S@mE?k@B]?gCBoB@A?sA?c@?kABqA@_EBuC@yCBmC@kHBiFBg@?wC@{E@S?gB@A?qB@mI@}C@sF@sB@kA?_D?e@?_A?m@Bc@DUDYHWHYJWLYPYRUTUTYXe@n@c@|@Sb@O`@M`@M`@Md@QbAGn@Gd@E`AElAAf@?t@?fA?d@?d@?jB?bO?vH?~E?pKAdI?bD?|B?~G?vFAjI?`GA`g@?tUA||@?tGBx`@@fT@lQ?v`@AjS?bFWhbAKb{@A`FEjbAAzW?zP?nJ@fE?dF@nQ?fI?l`@?nF?hWAh[@`GBnaADxl@BzK@jG@rv@@jeA?rF?tB?|GC|KMle@Af@?\\Ap@?`@Ap@E`AAXAZCd@IdAGn@K|@MbAMr@EVEZERIZWnAW`Aa@pAOd@Ul@Qb@Uh@Wj@]n@MRYf@W`@ILY`@UZGHi@l@o@n@}@x@g@^YRYPWN[PSJ[LYL[L]Lo@Tq@V_@Li@Ru@X[Ju@Z[Js@ViA`@u@XaCz@{M|E_Bl@gFjBs@Vs@Vu@Xq@Vs@Xs@ZYNiAn@o@`@]VsAfA{@t@mArA_@d@]b@IJKNU\\w@lA}ArCsAvCoFlLcGrMqI|Q}DrIc@`AwAxC}@hBoCfGcF|KmXtl@iCxFkMxXoJvS_\\ds@sNb[oBfEaNbZyAbDoQf`@iNrZu@~AsFtLgTfe@gUbg@aBnD_Rfa@mDxHoJtSoH`PwVvi@yEjK{JjTy@dBIR{A`DsSdd@y@fB{DrIaBpDeBxD_DbHgAbCgMtYeDrHgBxDiDpHsAxCsAtCiB|DsEzJcBlDmSpb@aGnMmItQiCxFmC~FmC`GsJ|SQ\\sBpEqEzJeFzK}C|GuAxC_@x@{Q~`@eOd\\wA~Ck@hA_@j@g@v@i@t@aAfAKHy@v@aAt@_@Ts@`@o@XYLu@V[H[HWFw@Lq@HW@a@Bw@?u@@qAAoB?mBAgC?wA?o@?MAc@?gAA_LA}GAaE?{EAkB?gC?sAA{E@qGCI?{C?eDAkB?mA@{@DkBTs@N{@Ty@XODWLOFy@`@u@b@k@b@[To@h@cAbAk@n@i@r@i@t@QZSZQZe@z@c@|@Q`@O^_@`A[bAOd@M^I^Md@Kb@Kf@Kf@Ib@Kf@E\\Ij@ADOfAEf@Ed@Gh@Cd@Ef@Cf@Ch@Cd@Ah@Af@Ah@ApA?vB?zB?t@@pbA@df@?`B@pMAx@@xCBpBF~AJfB@PBZDh@Fl@Db@LlANhAXpB`EzTx@lExA~Hv@dEZzAF^XlBdDpQLp@j@|CV~ALvAJnAHtABf@@x@@n@?t@@jB?@?hA?dB?zA?R?jA?z@DvA@ZDj@Bb@Bf@Df@DZ@FBRBRD\\@FFj@F`@BPDTFb@b@rC@FNdANhATjBDj@?@Dh@Dv@Bp@@TDjCDhB@z@LpH@`A@`A?zDAzA?hAF^@D?lG?tC?pA?d@@v@Az@?zD?jB?p@?r@?t@?t@?h@?vB@dDAnA@t@?H?t@?p@?bB?r@?vC?zB@|K?bC?zB?hD?|HAfI?fE@jG?nD?L?xB?j@?n@@f@?D@V?X?r@@XIR?Z?|@?D?~C?V?bB?rA?X?fA?J@|@?r@@v@@xA?vFAzE?`I?zB?dH?zBAnC?rI?xB?nE?~D?fHAtI@vAAfC?|K?r@?dA?|N?tC?hC@`AAjB@rA?d@@bA@x@@bBBr@RlH?LF`DBhB@x@BzCAzE?TEhCAjACvBAd@?ZIhEAt@M`GClCAjB?fA?h@?tE?rC?xG?bLA|S?bS?xB?pHAl^?|@?fZ?lF?bBAtW?|C?bE?`RArH@rFA`W?jD?xT?nFA`I?t@Gly@Epj@A|L?j@A~FLtr@@pH?j@@`GBzRHj_@@~IC`a@A|`@Avd@ArQ?xIDdbA@nQ@lM?rA?pA?pF@dSBxhA?vJ@xY@`I?xI?vJAt@?hB?dq@A~l@?bS?lAAhDCxJAj@?bAAb@G`HI~HMbJMnLExEAdCA|BA`BAbB?|C?~D?fF?|@?l@?`HAjC?tI?tG?lV?~m@?fv@?d]?`D?nV?t@?jE?xO?pQAdS?dJ@|u@?`JApP?lH@jR?nP?d@@`C@xT@tN@pG@lQ@hT@`N@zE?xE?rC@nC?hL@zKB~Z@hZ?zA@pN@nAAr@?v@@tI@xH?dFBf\\@f]Bn[Bpf@?jLDf]Bva@Fhw@Bpe@@fG@nSBj_@BbX?fI?pE@fH?vB?|B@pCBjB@dAD~AJ`CD~@Fz@N|BH`AJdAFr@Fl@NfALbAJv@r@lE|BhLTjATlAD^PdALx@JdAHr@Fv@Hv@Bd@F`AJzAB`ABv@DpA@jA?dAAxD[xM]dMy@f\\s@pXe@jQO`GG|AOtEAJKpCGtAOjCI`BU~EWnGc@|IQdDKhAAPOfBOtAMbAOhASpAO`AKf@_@hBS`AQv@Ux@St@Y`AW|@M\\M`@[z@[z@i@lAq@|AaA|Bc@`AiJ|SmX~m@EJqIpR_ApBmArCw@hBq@fBq@jBo@jBk@hBm@vBg@pB]vA[tAS~@Ov@YxAW~A]vBO~@Kx@E`@M~@AFIn@?B[zCOdBKzAOvBMnCIdBE~AC`AAh@C|@CbB?tBAbQ?f[?b\\@|H?jG?nQ?jG?`I?`G?vEAhF?lQ?`D?pB?|C?jB?hB?`@?R?jB@jGA~E?jG?bI?tJ?lLAxT?jI?rR?z^?pNA`I?xO?vI?pM?jB?z@?hG?tR?pFA`I?ZClTA|FAjK?d@AbKAhJClRAxIAlECdSAzH?rBAhAC`BC`BE~BIpBCp@I|AMzBWfDGx@MtAMhAQ|AAHIp@_@xCk@|Ee@xDm@zEYbCQtAOtAEd@K`AI|@Gp@IhAIbAC`@K~AIzACr@ErAE|@A|@CdACx@C`C?bA?d@?|@?~@@~A@~ADbB@r@Bh@BdAD|@F~AJdBvAbV|@`OlAjSv@hML`CFbABd@J`CHtCFhC@dB@~A?h@?rB?hCApN?t@A`NAvF?|FCfX?fGCt_@AzLElu@A`BAzBEbBATAz@Cj@K`CGxAGdAIjAEv@M`BO|AUzBShB_@nC[zBGZMp@AJa@vBYvAGZMn@CH]zA]vAQn@cApDsAxEa@~AOd@K^CH{C~KqVj}@{@|CeCdJuEtP_AbDa@rAQl@s@rBe@pAWn@c@fAm@rACJq@vAk@jAYl@gBrDgA|ByDbIcCdFa@z@sAnCeHxNqElJ}@lB}A`DcEtIgBtDiBtDyA|CaBjDsAhCu@rAaA~Ai@x@OTo@~@g@t@}AlBgBtB{BbC_@`@gChCy@~@{@bAq@t@yBbCWXkFdG{CnDaDtDiEbF[^qKdMw@~@o@v@s@x@u@z@a@f@c@h@a@f@_@f@c@j@_@j@o@|@a@l@c@r@ILa@n@i@z@q@lA{@zAw@zAiA|BeA~BoClGmFzL{Qnb@Wh@sCvGa@z@wAfD{CfHkAlCeCzFcH`PcCtFiRhc@uElK{BfFoFdM_CnF{AlDAD_A|Bs@jBm@hBc@rAa@rAk@tBg@pBo@lCk@pCS|@E\\[hBa@lCGb@Mz@[jCANUzBKbAGz@Q|BKbBE|@MbCGzBEtAAt@ATCbCApB?pA?`B@dBB~AB~AD`BL`FHbEFpCDpB@|A@b@@|@@bB?`A@bA?~A@bA@bHHf]BzIDxOBlI@vKFp`@@zH@hJBrRBjc@@vE?r[?te@Ahg@?`Z?xT@`g@?vJ@p[?xT?jJ?zZ?nL?lLAnK?lL?nQ?~CAfX?hD?rBAlE?jA?tC?vC?F?bC?`AAxC?rC?bEApBAnR?|B?dB?`LAtE?`D?t@?bBA`B?rB?dB?D?`B?jB?jG?rD?bG?bHA`F?fD?dF?tE?|@?hA?tH?zA?pE?zQA|D@dDAbC?dF?bE?t@?~E?`@?p@?z@?`@AbBAzAChAE`BAVGnBOpDQpDKpBw@bPE|@GnAItAI`BK`CMbCKvBIlBKfBCr@ADAZEn@En@Eh@Gp@E`@E^M|@Kn@Kl@GZMl@IZOh@IXOj@Ob@M^KVQ`@Sb@Q^OZUb@U`@U\\W`@i@x@e@r@]h@UZ]j@QV[f@e@x@e@z@i@fAk@lAMZc@bAQd@Wr@[~@Y|@K\\[bAI\\KZQv@WbAg@|Bc@jBQt@w@dDeAtEaDnN}D`QOr@iC~K_BbHcBnHgC`Le@rB_@|Am@jCcAnEq@tCo@nC[vAo@pCS|@o@nCmAnF[rAQ~@YtAYxAa@bCU~AWfBMfAKz@Q`BE^MzAGp@KjAGx@GpAGz@E`AE~@E|@A`@Cr@EzACrBA~@Ap@AnB?zB?rD?lZ?~H?r@?`DAx^?~I?h@?lQ?vA?|E?fH?rC?lE?fF?lM?tB?B?fFAvC@zBAvA?bC?dG?rD@nFAdD@~DAbG?rH?lD?bE?b^?tA?pE?b@?xA?vA?zB?zJ?bL?jl@?f@?`@?`A?dB?Z?v@?h@?bA?R@f@@dA?T@t@?R@b@@j@Bz@?ZD`AB~@B^D`A@XBd@B^Fz@Dt@HlAJlAPrBNbBLtAL`BD`@F|@H|@Dj@Bp@Df@D|@Bb@@XDdABj@FdB@p@B~A@~@@bC@pB?lB?~A?bAAl@@v@AxBA|AChAA`ACdAA`@Ev@G`BElAEt@KbBG`AMzAM|AK~@WxCEd@YbDEb@KvAM~AQ~BE~@Eh@IxAE`AA\\C`AE|@GnCEvBC|AA`AAbBApA?hC?nFApJ?jS?|C?jB?vB?dE?d^?lJ?fi@?rJ?bGAzX?zT?f]Adp@?|EAr[?hS?|E?zTAd_@?nE?xJ?|MA``@?N?hS?j@?nAChAAjACx@E|@E~@G`AM`BEf@OzAIh@Ip@Mt@Ih@Kj@]`Ba@dBK^k@rBUp@Qf@y@rBADc@|@{A`D{AxCyBhEyEpJeJzQWf@gAvByBhEmBpEg@lAw@xB[|@[dAWz@Qp@]pAUdAUlAYtAW~AGd@CRMx@OlAMjAK~@OhBObCGzAKlCMrDAZU`Ho@lR[nJQdFiBbj@[fJg@hOUdHq@`Te@fNyArc@YrIo@|Ru@fUi@tOGnBMfDo@nS]tJGdCIdCExBGzFC`CApE?|B@vCApC@pE?|D?~K?t@?~C@rG?dD?vU@pJAxB?za@Ar\\?nHB`EF`KJvIDjH@x@@rFAlH?dDBxI?rA?fN?nGAn@@zE?jDA~DAlBArA?t@Ax@C~@?ZCdAGbCQbI?JCrACfCClB?T?xAA`B?nP?t@?`D?jB?vA?pF?R?zK?hB?hR?hV?~AAzB@f@?`DAdF?\\?`F?zH?hA?`C?bE?`D?bH?`B?`D?`D@bF?~A?bE?X?fB?bF@`EA~B@bC?~B?dG?~@?~A?`B@`B?`A?~A?fA?x@?`C?`D?bE@dL?`D?`B?`B?`D?`B?~@?`C@`CA`C?`C?bD?`C?bE?|A@bE?`C?`D?dF?lG?tA?`C?r@?jA?bE?`D?bC?~@?N?pA?`C?`F?`@?`B?~B?`C?vB?H?vG?lD@fA?|G?`F?X?t@?rA?bD?R?jB?`C?`B?~A?bC?`B?d@?zB?zF?fA?`B?`B?~A?`A?`C?dF?~A?lB?r@?`B?`C@`C?`C?`E?bC?fHAfM?~H?nG?zFA~C?dB?dF?vDAfAAhBAPC~ACbAA^E|AI`BEjAEr@G~@M~AG~@E^S|BK~@I|@SzAM~@Kz@UzAWzAWxAOz@I^Ox@Sz@Qx@U~@?B[lAi@nBc@zAQn@o@nBa@hAs@nBO^g@lAgBhE}BrFaErJkBpEu@dByAtDo@fBYx@A@Sn@Ut@KZUv@KXI\\IZKZm@~BeA|Ea@tBY|As@bE_DjReApGmBlLiElWw@rEuArIaCtNiBxKc@xC_@zCe@bE[jDWhDQfDWhGCvAGlC?d@A|@AjBAxD?`D?zT?bE?li@?dd@?xO?fIAlL?hR?hI?xG?~YArL?lH?|G?jG?nC?dA?rH?fCAxJ?nB?|M?t@?xL?nF?|D?~@?hF?vE@nE?`H?|EBv_@?vF?zR?pD?zB?lAApBCzAAlACjCKzECbACdBAr@CbCClD?v@?fB?jF?~D?bC@fX@|G?bAAlK?pS?ra@@`]?ld@?jB?rD?jF?`E@`C?dP?bW?bA?dG?vH?bN?fU@tH@j_@?dV@vJ?hD@`Z?t@?dD?h@?tB?`B?bA@~P?nA?|D?dB?fD?fI?zC?xO?vB@nI?vJ?lE?lM?lI?pE@xT?~BAzO?FAhE?rF?tD?~D?jC?lGAtE?F?l@AtF?`@?ZA\\?d@Ad@A`@?XA^Ah@C~@A^Cp@?BEt@?BEjAGfAG`AIrAEd@Gx@I~@IdAObBKxAGx@IlAEz@IdBGnAAd@Cf@An@Cl@ChBAv@AP?j@AZ?j@?j@?\\?f@?hA?d@@h@?\\?T@H?J?VB|@@`ABz@@X@RBv@Bj@Bl@Bf@Dn@Br@F~@F|@B\\H|@ZvDHfAJrADr@Fz@J|AHtBFnADvB?@DlBB|A?~@@bA?`B?x@?dA?lG?r@?F@nE?t@?X?`U@|G?b@?`K?nL?t@?bB?z@@t`@?za@?zR@vK@~V?bDAbBAnA?l@CbBCz@C~@C~@E~AG`BEr@Ez@Eh@A\\Ex@MbBC\\IdAGr@QdBCZSpBS~AYxB]hCGZIh@[nBMn@_@nBWrAa@hBU`Aa@`B]tAIZc@|A]lAKX[dA[~@e@tAg@vAs@jBo@zAe@dAm@rACHcArBOXo@lAS\\Wd@i@`AOVo@hAm@dAiB`D}@`BaAbBeB|CyAfCmAvB}@~Am@dAgApBkCtEkBdD{@~AiLjSgFbJsW~d@gLnS{D`HgAjBqEdIu@pA{@pA]h@Yb@kA`By@bAeAnAo@v@oGrHkD~Ds@|@o@z@o@`AED_@l@[h@Yj@]n@_@r@g@fAGJ]z@]x@]~@e@pA]fAIX_@pAa@tAWx@_@rA_@nAaCjIiBlG_BtFOf@kA~DeArD}AlFq@pBq@nB_A~Bs@`Bm@nAs@xAg@~@o@hAq@hAo@bAMPYb@s@dAmAfBo@`AuAlBwArBgDbFORgHhKo@~@gHjKcBbCm@z@eCrDu@fAaQ`WeEfGc@n@g@z@e@v@S^g@`AIRe@fAWh@]`AOb@Ob@Wt@?@c@tAm@rBEJYhAU`AMn@SdAg@fDG\\AHYnBOrAOxAMrAIbAEn@Cf@El@?BKhBCz@CvACtAA~A?nB?vC?pJ?h@?fB?xG@hC?nG?rD?xB?jC?l@?~@?pA?b@CfBElAErAIbBOxBGn@MjAK`AWbBIf@EVIb@S|@WfA]vASp@Ux@Ut@Wz@c@jASd@uAzCq@xA]p@a@t@OTk@x@g@p@Y\\KJ_@b@UVa@`@c@`@{@t@MHcAt@u@d@e@VcAh@qAj@kAh@WJiAd@yD`BmBv@]LgA^cDtAwBbAwAp@{@`@UL_@Va@Ve@\\m@b@aAr@i@`@a@\\e@d@_@^g@f@e@h@e@f@Y\\m@r@m@z@q@~@g@t@]f@ILkApBGFaDpFo@dAmKfQq@jAYb@eBvCYd@gBtC}GdLmB~CaC|DYd@qBfDqAvBa@r@iApBgBdD{AzCwA|C[n@c@bAgAfCeIrS{BtFq@dB}E`MaBbEkDxI_GfO_A~BkBxEmC|GuCnH{@vBoHfR_KdWiCrG_FfM[x@cBhEqAnD}@dCg@rAWx@Sf@oApDaC`HcGdQo@hBmC|HiI~UuJ`YOd@y@|BwBlG}GzReJ|WgBfFsDrKu@xBeAxC}HbUSl@mEjM_DbJyGtRqK|Z{CzIYt@kBrFkAxD_@vAWbASz@_@`BSdASdAMp@UxASrAS|AQrA?DGb@YtC_@hEkApMWjCU|BIt@Kr@It@Kt@Mt@Mt@Mr@Mt@GVGXGVEXGVGVIVGVOp@K`@[hA[dACDK^Un@ADGR_@bACHYr@KX_A`CiDxIoA~Co@~AsGpP}IdUeGrOO^yCvHeDpIqOp`@kJ~UoIfT_GfOw@pBiCvGuAlDuEpL}C~HGNyQfe@uItTuJrVoEdLCF_EfKkBvEmHfRyVfo@Wr@_DdIwAnDeAnCkAxCaCfGiArCaDfIyEzLwBvF}@zB{B|FWn@c@dAiDxIwArDmMf\\cBjEk@zAaAfC{@vB[x@[t@Qf@Un@{@fCm@lB]pAYhAW`Ai@dCS`Ag@tCo@hDc@zBg@fCYnAs@nCc@dBa@tA[~@_@lAIR[|@]bAq@bBu@dBO\\q@zAs@vA?@S\\}@bBi@~@GJ{@rA_AxAs@`Aq@`AqBvCCBW^W^o@`AEHc@r@OVc@t@OTWd@c@x@e@z@Wd@o@rAMXGN{@hBm@xAGLaBdEgBrE}DbKuKxXaMn[wFxNeDnIw@tBiArCi@tAqBjFA@i@tAq@dBm@zAa@dA_@bAYv@Md@Qd@Qj@Ut@Ut@Qh@St@Qp@ENMh@[nAU`AK`@Ot@Q|@Mn@Ox@GZIf@Mv@If@EXKn@Kt@Kv@MbAEVGn@CRSnBU~BWrCYpCWjCIv@MhAQtAEZSlA]jBWpAU|@WdAQp@Uv@Ur@Wv@Yz@Yt@Ul@]x@i@lA_@v@w@tAy@vAYb@GHYb@Y^[b@q@x@c@d@k@l@e@f@w@r@aAx@i@d@y@p@g@`@k@d@i@f@YV{@x@GF[\\GFYXWX_@`@o@t@yAhBUZW^Y`@W^Y`@i@v@k@bAm@dAOTYh@Wd@c@|@]r@Yj@Ud@{@rBqAfD_JjU_CdGkBvEiBxEUh@iAvCqBjFu@jBeApC_@bAmBfFi@xA}@bCqAdDiArCw@tBm@zA{@zB[v@Uh@_AbC_@~@_A`CCFw@pBCFUj@Sj@A@}@~Bu@lB{@zBaAdCy@xBg@xAc@pA[fAUx@i@hBm@~Bc@nBUbAABMl@?BS|@[bBUvAW`BKv@QpA]dCMjAIz@WvCYlDc@nFKnAeAbNAPo@zHe@`G]rEOlBMzAe@~FSlCAHSjCAPSdCUxC}A~Rm@vHK`Bq@hIWlD]`EK~AMrAW~Ca@dFQhBKv@SbBQ|A[xBQbAMr@O`Ac@~Bw@lDq@tCCFq@dCc@vAe@xAm@hBe@lASj@_@z@a@bAg@fAa@~@_@t@m@lAa@v@[h@m@fAi@`Ai@bAq@lA[j@INi@~@iAtBS`@O\\wBdE?@qBrDaGtKw@vAeArB_@v@Yj@g@jASf@Qd@Sj@Wv@Ur@YfAOl@K`@Ov@Ov@Qz@O`AOdAM|@OvAGt@Gt@Gz@Ej@IjBElAErCG`ESpQo@~d@SpQAjAMzIK|GEbD[tUKbIKjIK~HUjQM~IGnFKjHChBChBI|GQvMI`FEhE]~WGbFSfO?HIjHE|DCpCCfA?NGxDGnDKzHCjAEjCCjBCjBC`BItGIdEGhFGbEIjFAp@ElEWhPItEMbKEdCChAO`LKzHM`JOdLKtHSlLKdJGzEGtESzMU`POtLOnLMzMIzIGlHGnGIxLCtCM~NErDCpBCbCErCW~LKjFEbBAt@KvEEjBEjBIxDAZKbEG~BAX]fPOxGIjDSnHMlDMjDUjEWtEi@bIc@rG[nEUjDYnEKfBQfCa@nGwAvTa@dGEd@YvEm@jJ[vEIjA_A|Ns@vKs@fKIjAmArRy@pMs@lK_@hFeA|Po@tJuAhTm@dJy@bMMpBObCKfBIbCGpBI~CAp@AtBAnCBhC@x@FvCBvA@b@HjCLjCFnAZpEJhARlBD`@PtARdBJt@b@vCf@hDt@vEj@rDRrAZnBb@tCb@vCHf@jAxH^fCVpBRfBJfAJzAHpAF|@FnADpABdABnA?fA?rA?DAjAAxACjBAh@Cv@GxAK~AMhBOtAGj@Ef@K|@QnASpAW~AOv@YtA[tAU~@K\\Uv@a@xA]bAa@jA[v@e@jAg@fAw@bBw@xAqAbCeDtG}BnEuAnCy@fB]v@]x@Wp@]`Ag@xA]hAYbASp@Sz@Q|@w@tDsEbUuAbHOt@g@bCmAdGu@xD[`BUlAQhAQjAMfAOrAEf@E\\IfAGz@YzD]vFCh@I`Ao@zJK`B_@hG[|EEj@IxAUdDAHYlESdD?BU`Da@bGMjBWbEEn@M`BMpBANWlCU~BOpAa@xCYnB?Bk@jDG\\y@xESrAm@rDu@xE_@bCSlA_@zBk@rDa@~B_BvJi@bDcApG]tBQjAu@nEQdAq@jEy@`Fo@zD_A`G_@tB_AdGi@hDi@bDe@tCEViArGq@rEW~AOhAQrAIl@QbBMjAK~@ARCXOrBSxB?HSfCUzCQxBATWvC[`EGt@UvCOlBOvBO~AMdB?@Q|BQ~BUvC[zDQrBIhAQ~BUvCQ|BOpB]jEQxBEj@YvDEb@Gr@OpBUtCOhBSvCIz@MhBOhBYvDYvD?@g@lGSfCOtBSdCo@jI[~Do@hIg@tGKpAI`Ai@hHQbCI`BIbBGpAEhAEzAClBC|A?bA?pA?tCFdEBvABvAN|EHxBFrBDxAFvBH~CBfBDfDDdC@xC@|B?D?t@?jC?fBEjII|ECvBEpBIfDKnCEfAEnAQrEOvDM`CMzBIjAYlDWrC]jDQnAMz@Kf@UbAWdA[pAW|@Y~@[~@]v@]v@]x@g@dA]p@k@`Am@~@o@z@WZa@d@aAfAkAjAQP_AdAi@p@a@f@]d@W^g@x@[h@Yh@_@r@Yl@Ud@ITYp@q@nBOf@O`@Ol@YfAOn@Sx@Or@]dB?BYzAm@hD{@pE}@zEqBtKsAjHy@lEmFlYMp@eCtMqAdH]nB]fB_AbFWjAcHv_@oBlKcEbUeBjJaBzIwEfWcExTk@vCmAtGu@~Dq@hDUtAwBhLeAxFyAbIa@~B}@tEe@fC{CjPMp@a@~Bm@|CsB~K_AbF{@jEi@xCYzA}@|Eo@nD_BxIk@xC[zAeA`G_@lBYzAY~AERgAdGWnAwA|HWnAENk@`DIf@aAjFc@jCSfAi@vC]dBa@|B[`Ba@xB]hBG\\]nBGZE^Kr@If@Gd@CPANCRE`@C`@KbAOvBGtAG|A?XAnAA~B?ZB|EBfEFnG?r@B~EDdGBlDDdGBvD@rCBjC?`CBhD?N?~@@tB?bA?z@ApC?dD?xCAlA?vDAzBGjHK~LYjUIvGk@xb@CnAOjO?h@AzJ?N?dE?@@jB@jB?r@@nEDbN@pE?X?\\?t@DrJ@rG?R@nE@`B@dE@nCBtG@xBDrO@bD@zC@dM@|G?`D?|@?tMAzO?tE?B?lG@lG?lD?xD?dB?dC?nL?~F?xF@pP?|D?`B?dE@hR@hS?b@?bD?jH@vE@bD@xJ?pA?dC?vP?pD@bI@xE?bI?bJ?J?tCAzJ?jE?xGAzO?lB?vC?jD?dB?f@@l@@ZDrANlCBh@Fp@VnCRnBXjCZhCZhDNbBJzAFjA@j@@N?RD|@?\\@z@BlA?bB@Z?zB?d@?`A?hAAzAC~@AZAJE`AGdAIv@OzACTGr@GZUnAIh@ENUfAUx@Qn@k@lBu@nBm@nAABm@dAk@~@q@`Ak@v@WZu@~@_AhAA?iC~CwAfBs@z@c@d@u@`AgAtAKLuAdBi@p@eAtAw@`A[b@}@fAsAfBoBbC]`@a@f@eCzCk@p@[`@i@r@k@t@s@dAY^}@tAa@l@U`@]j@KRKRa@t@_@v@wAtCgAjCGJUh@Uj@aAxCUp@e@zAIRY~@AF]jAGTMj@Qn@Kf@Sv@Mj@g@~BKj@G\\]lBe@xCG^a@`D_@nDSrBGt@E^Gx@IxAEh@?JQxDE|@KrECx@?R?NAZAbC?~BAdF?xG@`B@zK@`D?\\?dB?vE?|NA`E?jB?r@?lB@nG?rH?~F?lC@zB?fI@dE@~A?hDAhI?zFAfTA|OIpq@C|OAtMGjc@ArN?`P?bQ?|OAhSAzK?xJ?xE?`D?bJ?nJ?jB?nG?xJ?zJ?`D?`D?jB?t@@vE?xE?`D?t@?|O?jB?t@?jB?t@?`D?jB@dQ?fI?jX?xE?dN?dI?jX?dI?xF?rH?dNAvPCx]AfKAjF?hHAzJAvEAfNA`D?vEAhH?z@?`IA~TAjJ?rC?hC?t@?fE?z@A`C@fLAlC?|A@lBCbI?b@?P?jCAbC?nC?|DAfDAtF?fFA|C?NCtKAvE?pB?bFCbHA~C?lAAhBCrHAjCAhEEpNCnJC|N?`BAtEAdPAvE?rCAdN?~I?vE?rEC`w@A`K?rg@AbZ?~T@zDAtF?lG?zVA|O?jB?pD?t@?jB?pCA`D?lBAf[A|\\ApL?jS?nMAvFApQ?`DEjdA?x@AzJ?rIA|OA`Z?nLC~TCnY@jE?nLAnAAl]AdI?nLAnI?jL?t@?hSA|S?xJA|GAvEAxJ?bDAlGAbIA`DArJAhKEhi@AhLAfZ?`UA|O?hVA~J?nL?xE?rLA|OA`PAhSA|O?xJArKAnL?zJAlG?t@?~CCxJEpUE|TEl]AfNAbICpLArKBpT@bIBxJBfM@pHBdJBrQBdIBdH@jB@bI@pD@nL?jB@pL@xJ@xE@bI@nG@tHFzO?vD?pCDxS@hIBbJ?lA@rQ?fG@nN?hA@xE?`D?rQ?vKB`RA~M@bIBpL?vHBfa@?`JDdTBjZ?~F?`R?v@?t@?dD@|C?pL@vE@nL?t@@nB@jJ@lK@hG@lM?lP@rSBbG?b@D`D@j@B~@BrAHzBLzC@JN~Bb@rFNhBFh@?H|AbQl@jH|@xJ?BhAtM\\vDLrAbCzXZjDt@vIb@bF\\lE@JFt@`BhR`@~DNfAL`ATxARbAPx@h@zBPt@ZbARj@f@xA^|@Xn@@B`@z@b@v@^n@^l@^l@d@n@@@n@z@`@d@Z\\f@f@`@^r@l@jGhFpAjAxBfCp@z@t@lAp@hAh@dA|@nBb@jAPb@N`@p@~BnArEhEjP`BnG|@nDrA`FbCbJbAzDbAxDlAvEh@`C"
                     },
                     "start_location" : {
                        "lat" : 47.7783626,
                        "lng" : -96.6032197
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1479
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 146
                     },
                     "end_location" : {
                        "lat" : 48.35149699999999,
                        "lng" : -100.4051632
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eND-14 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eS Main St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_a`fH~hycRWLGD_@VQHSDW@U@iB@]?iC@_A@uAA{AAkEDqE?a@@mD@mEAmD@w@?c@Ac@?Q?gCAoAAwA@oD?uD?mC?c@?"
                     },
                     "start_location" : {
                        "lat" : 48.338235,
                        "lng" : -100.4047996
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "34.1 km",
                        "value" : 34091
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1185
                     },
                     "end_location" : {
                        "lat" : 48.5746176,
                        "lng" : -100.7143316
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eND-14 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e6th Ave NW\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow ND-14 N\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{sbfHfkycR?`B?t@?`D?jE?jB?xA?vEAzD?nW?tBAxB@vE?D?n@?t@CfDCd@AfAKjBSvB_@nC[hBI^e@hBc@jAa@jAO\\Wh@?@Wd@iAjBg@p@eE|FiFbH{ApBaC`DcQvUmKtNmCnDGLqCnDgAdBeDhEaBrB_B`C{KfOmBhCwFxH}KhOgStXY`@eOhS{@jAmA`BiClDg@p@}B|CaErFY`@cEtFkBfCKLyDjFyC~DyApBqCvDm@x@oBjCmH|J[`@kI`LgHrJwFxHmJhM[b@eJbMw@bAqAfBkOrSsGzI[b@w@bAu@dAsCxDaLlOY^{DlF}EtGi@t@}AvByDhFkDxEeCfDY^q@|@eChDmA`BmCrDuBpC}F`IA@_AjAiGpIEHQRwAnBiHzJwBrCsAhBSXuBrCi@t@gAxAmCpDgCjDMP[b@w@dAiBdCkA|AgCjDg@p@kA`Ba@h@[b@aArAeAxAy@fAcAtAqCtD_C`Di@t@aCbDsCxDqBnCuBtCq@z@QVaLbOsUzZ[`@uOrScDlEmAbB_R|VgClDcEtFo@|@mBlC_ChDgElGo@~@mC~DqD`Fwd@vn@oMfQaKdN_PnTSXgTxYqAhBwJxMoCtDaShXa@j@[`@eJbMuDfFu@bAcAtAiClDmBhC{@jA{ExGuBrCKJ{BzCmCtD_J|L_@f@oNrR}M~Qk@v@}ErGoAlBUVk@p@gDvE{F|HyBxCGHY`@kA~AcBvBsA~AcBjBcBdB]\\]^mFpFGFaFbGoA`B}@nAgGnI{CdEwBvCyD`Fq@dAqCtD}DrFu@dAkBnCYb@q@`A{@xAwBtDyApC}DvGsBfDoBrCu@fAOPqJtMeDpEu@dAOPcAtAu@dAw@dAeDpE}EvGmH~JiClDoCtDcDnE_TpYeJdMyJ~MuBrC[b@qHfKsAbBU\\mBlCC@s@bAY`@cExFY\\iI`LgE|FwDhF{ArB_BvBo@|@w@dAoAdBoBlCkA`BSX_AnAs@bAu@jAcAzAg@v@}AlCoAtByClFYf@ePpYYh@aIpN{CnFuH`NqC`FgIxN}B`E}I~OeBzCgEtH{FdKyFbKeMzTsGjLoHvMg@z@uF`KiEtHmOpXoOpX}Xbg@mMjUyFdKcBvC"
                     },
                     "start_location" : {
                        "lat" : 48.35149699999999,
                        "lng" : -100.4051632
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "43.0 km",
                        "value" : 43039
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1573
                     },
                     "end_location" : {
                        "lat" : 48.57474089999999,
                        "lng" : -101.2993146
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e80th St N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kfngHpwueR?vAAnGAtQAhN?fB?hB?xEA|K?hA?t@ArL?tDAxA?bFAfB@rJ?tE?B@t@Ax@C|@@zA?xI?RAtQ?|C?z@AdI?bD?rA?pF?tJAhD?vE?nD?`HCbT?zJAt@?v@?dB?z@AnG?fC?fCArF?pA?lB?t@?@AlG?nG?nB?p@AjB?v@AnI?lEA`G?fFAbDAdI?t@AvF?vEAv@AdI?t@?V?\\?t@?v@?jBAjB?t@?lBAxE?t@?jBAxE?h@?JAnG?nGAt@?vA?R?nGAlBCxc@?lK@pC@pO@vQ?J@pL?jE@|H?pP@fE?P?xE@rJ?rJ@nX@dO?jH?X?nE@`C?lA?fW?dP@p]@rL@z[?hN@nG?tA?dH@bD?`D?x@@tE?nGBn^@r]@jd@@`f@@nG?hN@dE?lP?pL?lB?fN@~O@~OBrs@?~O@pL?jd@?zJ?nG?hD@bN@fD?jM?zF@~O@~O?~OBli@@h_@@tI?xE?`C?d[?bK@dB@dI?bE@dH?vJ?B?hI@jH@nX@vMAf]?dHArMAlH?xU?|J?`D?rL?jD?nF?fG?tB?lG?xA@hR@~`@?zJ@pL@dZ?z@@`S?dI?|J@dE?nK?hF?b@?zK?fC@fC?nD?zMAtA@xD?`D@fI@~O?jD?nE@hN?vV@tQ?@@pF?~D?nG?dI?|KA|R?jK?pL?rL?dI?nF?jC?nG?nG?`U?xE?lH?bM?rOAdI?dI?|H?pN?vB?lL?~NAxC@tB?dIApFAjW?v@?`D?xE?jB?dI?t@AlE?dI?jB?bD?dD?fH?fI?lG?v@?~@@pJ?t@?nGA|J?fL?lD?t@?nJAnK?|J?pL?jB?nGAdI?v@?zJ?jB?hN?jK?bU?t@ApL?v@?nG?jB?dI?~O?t@?`U?bUA~`@?lG?lF?rL?`C?bDA^GfA?b@?rK?\\?t@?|J?|@?~YAf_@AbD?tE?~J?t@A~O?jSAxV?t@?vN?|G?t@AjS?fI?jB?t@?t@?bUAdZ?fN?~O?xEAzJAnG?lA?xJ?jd@?t@AbU?t@?fJ?dI?P?zA?|DA~D?t@?t@?`D?lBA`U?lB?^@`QC~FAzF?rDAdZ?d@CvOA`O?tQ?t@?z[?jR?fE?pL?pn@"
                     },
                     "start_location" : {
                        "lat" : 48.5746176,
                        "lng" : -100.7143316
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 km",
                        "value" : 4831
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 175
                     },
                     "end_location" : {
                        "lat" : 48.6181835,
                        "lng" : -101.2992631
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-83 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cgngHt_hiR}`@@uF@I?wE?kNAsMAwJAkB?aI?kK?c@?C?wF?gSCc@?wC?_HAsB?c@?wE?_HAuH?sD?{O?c@?qF?yU?qM?oC?{F?"
                     },
                     "start_location" : {
                        "lat" : 48.57474089999999,
                        "lng" : -101.2993146
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.4 km",
                        "value" : 4387
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 174
                     },
                     "end_location" : {
                        "lat" : 48.6182703,
                        "lng" : -101.358947
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCountry Rd 26A\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "svvgHj_hiR?lBAdI?nGElu@?`UCdc@?D?f@?~N?tC?dI?nG?t@@|M?dW?xE@dI?lB?`D?lB@jXExKEbO?t@CvK?nIDpY?d@?vGA|J"
                     },
                     "start_location" : {
                        "lat" : 48.6181835,
                        "lng" : -101.2992631
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 406
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 48.618292,
                        "lng" : -101.3644706
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCo Rd 26A\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ewvgHltsiR?t@?bL?hFAzA?t@AxF"
                     },
                     "start_location" : {
                        "lat" : 48.6182703,
                        "lng" : -101.358947
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.4 km",
                        "value" : 6381
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 231
                     },
                     "end_location" : {
                        "lat" : 48.618452,
                        "lng" : -101.4512683
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCountry Rd 26A\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iwvgH|vtiRGxVIz[AtG?V?zDArV?nG?xEAzF@lF?t@?h@?|@H~G@bFEdF?DC|DC`C?D?X?vB?dN?hF?D@tE?dI?B?xJ?@?r@?@?l@?rS?|J?@@jS?|R@T?F@vO?D?dF@fW?T?BGrs@?ZAtK?xEAzK?rK?t@Cpz@AxV?vN"
                     },
                     "start_location" : {
                        "lat" : 48.618292,
                        "lng" : -101.3644706
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 km",
                        "value" : 4809
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 172
                     },
                     "end_location" : {
                        "lat" : 48.6184979,
                        "lng" : -101.5166962
                     },
                     "html_instructions" : "Continue onto \u003cb\u003e83rd St NW\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ixvgHluejRAjS?bG?nB?bDApE?hD?v@@vM?fAAdI?jH?vK?jS?bD?t@?nG?pG?rL@tQ?rF?~UAnX?nf@AfP?|[?pLAfI?vE?v@?nX?t@?bD?nGAjP"
                     },
                     "start_location" : {
                        "lat" : 48.618452,
                        "lng" : -101.4512683
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "16.1 km",
                        "value" : 16139
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 599
                     },
                     "end_location" : {
                        "lat" : 48.7634875,
                        "lng" : -101.5184199
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e37th Ave NW\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 9 S\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow County Rd 9 S\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sxvgHjnrjRkHDOAoKJsDDoKMsDEaDA{F?{O?wE?{F?oL?{H?yG?cB?oCA{CAqK@s@?{F?{AAgF@oL?mO?_H?cIAwE?c@?{FAsB?kD?qM@c@?_C@qIA}I?iP?oDTaGA{FA_H?eBB_M?e@?uEAwE?gH@sDA_H?oMA_H?kAAuKCmFAkB?kPEs@AgD@mIAkKA{OAqDB{BBoJKmHJoC?{G?{E@eC?cD?sEBcFFiDBaFBkK?gJ?kE?aB@y@D]BqALuAXmAZiBn@sAj@c@PwDvA_B\\iBZgCHO@eOAE?{A?aFAg@?sD@i@?cE?yBAoC?wF?kA?_ECqF?mF?sA@wB?kE?oH?eJAkL@gC?oA?uLCeB@c@?cB?k@?mBAwB?iD@I?aM@iFCwA@qA?oFAg@@_C?aG?oC?eD?{@?mDG_EGsBCiD?kB?y@?"
                     },
                     "start_location" : {
                        "lat" : 48.6184979,
                        "lng" : -101.5166962
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "41.7 km",
                        "value" : 41686
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1479
                     },
                     "end_location" : {
                        "lat" : 48.7637566,
                        "lng" : -102.0871474
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eND-5 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ybshHbyrjR@nH?dD?|F?tA?jN?lO?~H?rd@?hL?nG?fI?vP?t@?|J@zF?tM?hMAfZ?bF@zN@rG?jHA~Q@pO?hE?vB?xIA|F?fB?rX?B@dM?hE?rC?`G?tD?pC?rD?hN?^?V?nG?dAAhN?`W?`I?hA?bJ@dE?pW?xE?bB?nJ?bF?pB?tE?|Q?tA?xD@nS@dL?tI?hG?rB?|J?`E?|B?d@?nC?f@?dI?F?jG?vC?|G?xE?v@A~O?bH?tH?rD?jC?fF?T?nJ?lMAR?dI?pG?`TAlI?ZAxP?nGApG?fLAjI?tE?jC?~I?hNArT?dB?dU?~A?rI?l]?tB@vQ@jNArG?|@?lMA|I?n@Bpi@?dI?zM?`F@d`@?tQ?fC@lK?nK?t@?fI@xM?|J?bM@dD?t@?~[@`CAbK?hS?nE?tB?~E?rJAbF?`G?~GAdG?J?|J?\\?xK?p@?rI?t@At@?nD?j@?xE@zV?t@?lB?rL@fI?r@?zE?xE?bD?fAA|HAbD?f\\?tB?nEAxE?xF?t@?pCCd]ApPAbD?jA?vAAnG?zL?vJA|J?bDCrM?bC?lK?|AAhE?xN?fA?jGAdUC`j@?jO?hM?vJ?|X@dC@nm@?jK?jEAri@AhX@|X?~I?z@AtJ?lC?fE?rE?xB?bL?nB?rJ?rB?tYAbB@fE?n@?lQ?vQ?pI?~B?hJ?jC?nJ?jE?dF?f@?`G?lI?fA?dD?jH?bF?lG@dM?bL?fC?hG?fE?`A?rE?v@?jA?lN?bDAlH@`A?l@?jG?dB?b@?`CApO?p@?vB?`J?nB?~JA|M?lF?dG?|B?j@?bA?rEAvF@dBAfE?`A?~A?jF?dG?hHA`C?dE?bB?^?bB?bB?fFA`B?`A@bA?~@AdD?`A?T?lB?bB?~@?bC?bB?bA?~@?`A?z@?hA?`B?`@?`A?~@?dBA`B?fA?xE?vD?xC?fF?fF?nKAbB?tB?nA?bB@~BA~IAj]?zX?~M?pA?xM?dDAtF?pD?~F?pLAhH?|L?jK@lA@bA?`L?dK?dF?xF?J?|J?fA?jMAxJ?jF?bD?lB?jD?lF?~E@hA?lEArI?dB?vU?bD?rCAhF?rB?~C?~C?vSAbSAxb@?pI?j@?t@AxN?xM?xE?v@?jB?nK?p`@?vQA|Q?pH?zH?~E?nQ?v@?xG?|N?X?t@AbD?pG?`G?v@AdL?jK?lB?tF?X?t@?lI?n@?`F?bA?bD"
                     },
                     "start_location" : {
                        "lat" : 48.7634875,
                        "lng" : -101.5184199
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "47.3 km",
                        "value" : 47274
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1664
                     },
                     "end_location" : {
                        "lat" : 48.8943233,
                        "lng" : -102.5460305
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-52 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "odshHt{anRkEAI?mCAkB@_E@YPoL@wE?{F?c@?kK@c@?iY?oO@kL@c@?gA?kB@yO@{LAaDAyAAkAC_BEeBEmBAgBAyF?cR@yXBqA?uA@uAFaAJ}@R}@Ty@X_Ad@gAp@]Xg@b@g@f@e@d@UX]d@W`@W^U`@STCDCFOZ[r@]~@Un@Wv@[hA[vAYnAM`AM|@MbAIfAG`AEjACl@A|@?tBA~AAbB?xBDl@A|M?xY?xE@|J?rLAjH?fI?dIAxQ?tD?xE?~@?nA?xE?bD?jB?xAAzO?`M?xE?fG?hG?`A?dI?nI?jB@|H?r@?zI?|V?xI?zVAzV?dC?jJ?pGA~[CzrAA~c@AlS?tM?v@At]?v@?t]A`\\?t@?vR?|T?`\\AzV?xJAlK?~AAtBCdFAlA?FAtAEjEOpOAv@IdKQ|QCR?NAd@A`@Cj@Cb@Cb@G~@Gp@Gl@Iv@Il@Kn@Id@Kf@Kh@On@Oj@CLQn@Wv@M\\Qf@Wh@c@~@e@z@U\\gA`B_@d@OP[Z[ZURQNOJOJSNOJGJWLm@Zm@Te@NMDYFk@JSDOBM@OBSBS@M@G?G?kKAoR?qF?c@?yO@eY?uN?c[?gS?sU@cWA}F@wNA_S?qk@?iH?kK?{I?mF?aE?{TAmU?wWAIB_J?cI?yF?yO?wTA]?gH?eA@_@@Q?SBU@I@YBSDSB[Fk@Pa@Li@Rq@ZKFa@PkAv@YVi@d@c@f@g@l@g@p@o@bAc@v@g@fA]v@Up@Sl@Sn@Sv@Qt@Qz@Q~@Ij@In@K~@K`AATEh@E|@Cl@Cv@Av@?~@AzF@zK?xB?x]@~LAlD@dA?dJ?`C?hG?hI?PCpl@Ap\\AvM?xL?pG?zDAfI?lB?xA?~B?bDArd@?tXAt@?\\?~I?~J?`P?pF?zE?t@?pGAnS?bD?bD?v@?pG?pG?xEAfU?`P?jOAz_@?|J?fU?zLAjO?~D?xK?v@?hR?fP?xE?bP?pGAxQ@zE?rI?rX?dGAjK?t@?lBF|V@fIBzJ@pI@zG?nB?nC?fI?xE?t@?dD?xE?|A?rA?dD?|CAhI?xE?lF?jN?nGCd@?x@?t@?jC?zA?fAAzD@`G@bEBXCzL?t@AxEArG?t@AnGAlBAfIA~J@hJ?vD?tL?lAAzT?vC?nR?vJAz\\?nA@tL?hO?hI?|H?t@?vJ?pf@?zn@?jN?tK?`g@@hY?dB?xG?bPArL?xE@nV?zN?xE?pN?vF?dV?|S@xH?`F?`\\AfU@fI?tL?t@?nKA|J?xB@d_@?jK?r]?dM?xJ?zI@`U?hX?rF"
                     },
                     "start_location" : {
                        "lat" : 48.7637566,
                        "lng" : -102.0871474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.0 km",
                        "value" : 11953
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 575
                     },
                     "end_location" : {
                        "lat" : 48.9989449,
                        "lng" : -102.552022
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eUS-52 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Canada (Saskatchewan)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "otliHto{pRkUCkTAs@?sC?oLAmIA}NCuFBoT?cI?aE?eS?yC?qC@oC?gJ@iKAgJ?c@?qJ?wE?k]AwE?eI?yJ?gJ?_H?cI?yF?og@AwE?gJ?c@?wE?uI?{S?cI?c@?oMAkF?sG?gJ@eJ?uCAml@?iH?k\\?u@?eAAe@CYCYC[E_@Ia@Gc@M[K_@MYM]M[Qa@Wi@]s@g@uCcCkDuC_As@c@Y[Q[Ma@KWGUCUASAa@@_@BMBMBUDQDSJSJMFOHQLQNWTORMNQXU^iCrEgAjBeAjBcAdBeAnBeAjBgApBcAbB]n@k@`AgCxEe@v@cAdBa@t@QTUVSTMTWd@"
                     },
                     "start_location" : {
                        "lat" : 48.8943233,
                        "lng" : -102.5460305
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 399
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 161
                     },
                     "end_location" : {
                        "lat" : 48.999628,
                        "lng" : -102.5567605
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSK-39 N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kbajHbu|pR_@n@Wf@S\\GH?@CFADAFAH?JAtD?@CdD?FABAFADcAnBKVELETEXAP?VBV@LDVDP@BJVb@p@"
                     },
                     "start_location" : {
                        "lat" : 48.9989449,
                        "lng" : -102.552022
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "32.6 km",
                        "value" : 32632
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1214
                     },
                     "end_location" : {
                        "lat" : 49.13271049999999,
                        "lng" : -102.9222726
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eSK-39 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ufajHvr}pRt@vANh@F^DXB^Br@BhCBl@?dQAxBCnBEpBItBIlBKdCOvBKtAM|AObBSlB]pCM~@UbB{AhKi@pDiLlw@iFh^Kr@sAhJuJ`q@cIpj@yIlm@}CfTKr@cCvPmDjVo@nEKr@aExX_B|K[|BGVsDlWuEt[WdB_Kvr@WdB_EzXKr@_ExXmBpMKr@Kr@gDrUKr@o@lEKr@c@xCgDrUKr@c@zCkElZWfBsAhJeBvLeI`k@uAnJOxCi@dDS|Ao@lD_AjF}@hGk@vDc@~CMr@gAxHc@|CKr@o@nEkBvMwCzSyB~Oo@nEg@lDQtAOdAWpAg@lCwA~Fi@nBY~@Sp@Wt@Sh@c@hAg@lA]v@[p@q@rAABUb@y@zAqAbCkBlDiBdD]n@{EzIWf@mBjDkFvJqIzO_@r@oAzBS`@q@nAEF}AtC{BdEmDrGYf@{BdEyHtNgCvEqF~JQ\\EFeG~KwClFe@t@q@`A{@rAY\\MRMNaAnAi@p@a@b@]^ORqAnAs@r@QPw@r@o@l@UTe@d@w@t@a@`@y@v@_A~@]\\CBw@t@cA`A}@z@s@r@WT}AzA_BxAQPi@h@]Z{@z@g@f@qAnAYZC@]\\]\\QNk@h@aA`AqBlByBvB_@ZKLiCdC}@z@aA~@eB`BML]\\m@j@gBfBGFsApA]ZWVEDcAbAWTkAhAk@j@]Z{AxAEDu@t@]Z]\\kBhBcD|CyBxB]\\SPiBdBYX}@z@]Z]\\A@yAtAmBjByAvAgBfBKH_JvIyBtBsEnE{AvAo@n@gAdAgAfAyAvAgAdASP{@z@]\\]Z[ZiCdCiCdC]\\wDpDoBpBEB_@\\{@x@CBeAbA}@z@]Z_@ZIHqAhAOJeBxAaCnBwAfAgA|@WRwBdBqB~Ay@n@SPu@j@_Av@mA`Aa@\\QLwAhA_BrAyAhA}@r@s@j@a@^WR}@v@c@f@WVs@t@s@z@o@z@Y^QVGJc@p@k@|@e@|@]l@[p@c@~@a@`AGNMZe@nAg@rAe@pA}BjHgCbIQl@{CpJaBfFe@zASl@e@|A}I~XSl@aEnMoF|PWx@{@nCQh@Qj@q@tBm@jB[z@g@zAWj@Wr@MVO\\GJ]v@[l@e@|@g@|@e@x@a@l@g@t@i@v@a@f@u@x@e@j@s@r@ONMLON_@^c@b@u@t@i@f@k@j@e@d@m@l@}@z@mAlAw@v@g@d@QPONoDlD{@z@{@z@cN|MsEnEoGlGoFlFg@f@oCnCy@x@wDtD]\\k@j@kAjAwAvA}@~@]\\]\\oDlDwEvEEB_F~EcCbCUN{E|EgG~FiAjAaA~@qAnAaAfAc@d@u@hAk@z@e@t@o@`A{@jB_@v@Wn@[x@[~@e@tA[jAIXu@jDo@rCEVSnAM~@EPEZCVKjAE\\OrCMjCAPIfEA`BAtDAhBBnD?hAAvC?F@rC?xD?zAEhK?fC?nB?V?nB?~C?x@@t@?pB?r@@vD?pM?~@?zE?hI?vL?t@?lB?rG?lN?dP?v@?hI?t@?vL?t@?v@?lO?tK?fA?vA?P?bA?`@AzP?t@?hI?fM?H@zD?fF?h@AzF?b@AtF?hL?|]?pI?dB?nLI~JMtMIhIAt@ClBU`WAl@CpGAtAInT@vK"
                     },
                     "start_location" : {
                        "lat" : 48.999628,
                        "lng" : -102.5567605
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.9 km",
                        "value" : 12923
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 508
                     },
                     "end_location" : {
                        "lat" : 49.17672229999999,
                        "lng" : -103.0516047
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eEstevan Bypass\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-39\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mf{jHd_esRG`@CVGh@Kj@CHM`@Wn@CFSZGF[`@IJ]RWLWLc@HS@K@IBKJwEBc@?c@?gJBc@?oC@eA@sC?I@wJ?{FDc@?yFDS?wA?i@@eB?i@@gD@g@@U@uXM_CZqB\\eDt@o@NiE|AmBfAoBnAA@oBxAcCbCSRcAlAGHeAnAkBtC]n@uAdC_AfBo@pAQZEJyAbDCBgAxBcDpGEHoCvFa@|@kFrKo@pAuFbLi@hAWf@Wh@o@pAUh@gD~GwAxCwAhDELoAfDq@dCGT_@`BaChKo@fJGt@QhCm@nR?v@?lBAv@ErS?t@EjR?~M?|Q@rG?zQ?v@A`W?t@?vL?rG?~J?v@?dP?zE?rG?t@?v@?t@?v@?lB?pG?lD?hI?`K@zE?`W?v@@rS?t@?lL?jKAzE?nNGrMMxM@hC?zE?t@?p@SrEAJIr@[lC]tBQhAiA`FsAlFkAxB_AdBkCzDcA`AuDpD]\\gL~KaBxAc@d@aClCeAvAgAxAa@x@eAvBkBpDy@tBOd@CFgBbG{@nGe@fDE`@c@pGOfFAl@FzHVzEv@pG|@lEZvABJ`AbE@FNd@Rl@Rl@Vv@pAdCpArCRf@zAhDXp@z@|B"
                     },
                     "start_location" : {
                        "lat" : 49.13271049999999,
                        "lng" : -102.9222726
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "151 km",
                        "value" : 151091
                     },
                     "duration" : {
                        "text" : "1 hour 34 mins",
                        "value" : 5626
                     },
                     "end_location" : {
                        "lat" : 50.0546421,
                        "lng" : -104.6226838
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSK-39 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oyckHng~sRDPFZBP@L?RANCPAR?PA\\{EzGYb@eDtEY`@iA~A}B`DeCnDsOnTkFtH_DjEcB|BKLQVgCnDuKlOcAtAkFnH}CjEwDpFgA~AmBrC_B`CCDwBnDwDbHkBhDmC`FwDdHyAlCsChFeBbDgL~SqJfQuClFWf@Yf@mDrGgE|HcAjBqBnD}AtCMPwAhCOZiBfDkAxBWd@{DhHMTsBtDeCtE{BbEMT}@`BWf@U^eApBsAfC_@r@_@v@y@fBq@`BSf@O^EJa@bAGRWt@Un@Wv@Sn@IVW|@Up@Qn@Qn@Kb@gCpJiAlEQn@s@pC_AhDi@tBwAnFOn@aBlG{@bDs@nCQn@uAnFu@pCQn@uC~Kw@xCoAzEOn@Qn@?@Ql@uApFa@vAaAtDa@|AGR[`As@~Bc@rAm@bBs@hBSh@w@fBABg@dA[p@k@jA}@`BcDhG{FjKgE|HkAtBeApB_ClE_CdEeDdFa@h@eArAy@bAyAbBy@v@mEdEcEtDsDdD}GbG{CnCu@p@aDrC]\\m@h@kBbBmBbBgDzCaCvBA@kC~B}AtAyApAmD~Cy@t@mAfAk@h@SPe@d@k@j@WVi@h@i@l@k@p@m@v@g@n@e@l@g@r@e@p@a@n@A@W`@CFe@t@]l@]n@oDrGABUb@Yf@iAtBYf@kAxBeExHYf@Wf@wMlVs@pAkH|MmEdIsMfVwB|DyG|LwAjC]n@eHrMsEpIuJpQmVdd@[j@q\\|m@Wf@_Xtf@cB~CuQv\\kAvByFjKcIbOuJrQYf@cB|CaHlMa@t@{DjHaMlUWb@uCnFaB|CYf@KRCDa@t@Wd@Yf@KRKRYf@OXa@t@q@nAi@bAiBhDgE|HuCjF_BxCcEvHkAzBEFq@nAYf@Yf@OXcCrEGJOZ}BdEo@jA}BhES^w@rA?@OZGJWf@e@~@KP{@hBiAbCEJkAlCu@bB]|@gAnCGN_BnEEHIVCJc@lAm@lBe@vAGPKZy@hCM^ELcA~CkB~FqDdLyAzEiArD}@fC]`Aa@jA_@|@Sd@Wn@]v@mAjCGLWf@]n@k@dAm@fAa@p@{@tAi@t@OT{@lAy@dAeCvCmC~CQR]^[`@MNaCpCyA`B}AhBeCtCaBhByAfBo@t@y@|@eCrC}BrCcAnAKLsBlCoDhF[b@GHeAdBg@v@aA~AWd@Yd@]l@kDnG{IjPoJhQuD~GWf@aFdJcIbOuAhC_OnX_FdJINOVaB~CGJmJhQYf@mDtGq@nAYf@{ApCyB`EsB|DuApCgBzDsClGuH|PIRcEjJ_DhHIRyKvVUf@oGzNmBjE_KhUiFtLoBlEwEtKoDdIgGjNeGdNwAdDgC|FyKxVCDuNh\\MVeAbC_F~KyFnMsIxRcKrUWj@iExJmMvY{AjDuI~RkFrL]z@kAlCm@rAUh@cAzBo@vAm@tAUh@Uj@}@nBeB|DSd@Uj@uA~Ca@dAa@bAYt@a@hAWv@Y|@Sn@Sn@K^Ql@GPe@hB_@xAU`Ac@rBWlACP]jBWzA]xBSvAS`BAHIr@CTa@lD[nCOrAUhBMdA]zCOpAK|@Ir@CLk@bEe@hCaApEMd@IZe@`B[bAa@lAGPk@zA_@|@cAbCcBvDaA|Bq@zAQb@Q`@EF]z@_@z@EHkAlCIRm@rA[r@g@jASb@CFiBfEKTUh@eAbCk@pAqBtEm@tA{AhDaBtDkCfGm@tAUj@OXmClGiC|FWj@Q`@e@fAcCnFm@hA{AlC]l@o@dAkAfB]b@c@l@MN[`@e@l@STGFq@v@e@f@a@b@QN_B|AsBpByAzAiAfAkBhByAxA_@\\]Z]\\uDpDCDYXwBvBMNONuA`B]^kC|C_@f@wBvCeBbCiBlCeDnFgGfKyBrD{GfLWf@wLlSi@~@[f@gJzOoErHsDlGeBxCmArBYd@eBxCYf@gBxCmErHyCfFqMtTsHlMgBxCuHnMaDrFaA`B{CbFIL}EjIYd@c@r@_EzG_DpFeGbKmBfD_BnCEJoBpDwAzB_C~DyBtDYd@sDlGaDjFm@dAmArBYd@Yd@aG`KaG`KWd@gBxCYf@k@bAaG`KsDlG_C`EaC~DsDnGmErH_C`EYd@Yf@gJzOeBzCs@jAYf@yCfFYd@eChE{BvD_C`EYd@Yd@oBhDyFpJ_E~GU`@qDfGkArBs@jAmEtHmArBYd@yCfFsDlG{GfLoExHMRs@lAeBxCYd@Yd@OT}@|AYd@mArBiIlNsDlGkCrEgBxCs@jAmItNQZiIlNqUx`@aA~Ae@|@}JxPgFzIaG`K{GfL_NhUcEfHkAtBkApBiB~CcCdEiH|LkD`G_@l@aDrFyAfC}D|GoMtTmEtHcEdHmErHmFbJgAjBgBxCYf@o@hAmBbDc@r@_C`EgBxC_C`EYd@sDnGsDlGs@jAmArByCfFsDnGmArBgBxCWd@Yf@{GfLs@lAsC~EcKbQWd@cQbZgJzOYd@Yf@Wd@OVkCnEkArBaC`EeBxCqAxBgAlBmArBYf@mArBWd@Yd@Yf@s@jAYf@wBrDwAbCsDnGYd@uA~Bi@`As@jAs@lAgJ|OaCbEq@jA{CfFWd@iD|Fc@v@{JvPgClEyCfF{KhRYf@Yd@mArBYd@yChFsDlGuC~ECFoApBYd@aBnCEFYd@gFzIYf@iAnBu@pAYd@gF|IILaI`Nu@pAsDnGgBzCkArBmArBs@lAWd@aEbHo@dA_BnCkAtB_BlCa@p@yCfFYd@{CfFKR{D~GYf@sBlDcFtIuE~H_C~DoMxTaEbH_A~AYd@kFdJeAlBGJgB`DaAnBmAdCqApCYn@s@bBy@lBWp@sAhDuCfIg@vASj@aDdJiClHENkGnQSj@g@vAsJpXiCrHUj@qAtDsEvMw@vBSl@gB`FgA|CwE~Mi@xASl@aFrNo@hBw@vBSl@_BpEq@jBmBpFu@xBUl@Sj@}CxIGPSl@Sj@sHjT}AnE_GtPgB`FiA`DaElLoIbVkHpSkGnQsHhTeDjJSl@Sl@Sj@qC|HSl@qAtDSl@qLz\\uF|O}FnPi@zA{@fCwF`P{BnGoC|Hi@zASj@eDjJmEfMSj@mEfMgB`FoC~HoC|HgBbFKXgClHmEfMSl@mNba@}@fCi@zAeB`F}@hCqAtD}@fCi@zA{BnGSl@gDrJ}BbGi@vAyGdQuEzLuE|LUj@uCvHeAnCuA`DeA~BcA~BWh@Uj@e@`AuAfCq@nAYd@}BdEaBzC}BpDc@p@uIhNsGjKaDbFeLxQ}L`SqEnHuCxEyA~BiAdBqB~CsKrPkAhBCD]h@gAdBCDeBnCYd@Yb@sAxB]f@kAlBwBjDeDlFCDU\\s@jAEDU^CDIN}CbF_ExGy@tAm@`AsAxBCFwA`CkB`D}@tAwBlDmDvFyH~LcBjCmEfHmDxFOJEHW`@]j@Q\\Q\\Yh@e@dAUl@[t@IT]fA_@vAU~@YjAUlAY`BUjBQ~AMvAIlA?DIpBClACnAA`@?p@?h@?f@@tF?nBAjBAxAAp@Ad@AXEl@Eh@EXEREZGVERu@`Dm@|BGVSz@Ml@G`@Gd@A?OzAALIt@Iv@?FBXUdCMpAEd@U`CSbBKz@SnAUvAk@tCEVc@xBcAfFo@dDGXa@~BWvAsArGm@vC{@hEgBvIgBvIiCtMcBrIi@hCq@lDi@jCOp@]dBgA|FCFq@lDw@dE{@nEKj@ADmB|IGTe@nBkAfEQh@g@tAg@rAs@lBs@~A_@~@]r@iA~BuC`FmAhBaArAuB|CCBg@p@uAjBm@|@_@j@yAbCw@tAWd@OVsAhCi@lAmCjGGRM`@yCdHsTph@uKlWUh@GNgBhEUj@yAlDUh@oBxEWj@yAlDqDxIyH`RsA~CgBhEyAlD}EjL{CnH_HhPwHzQoBvE_K`VwAlDqBxEsDxIk@xAkGhOm@vAwAlDe@`AeC~FUj@k@tAkEdKyAlDUj@i@nAsB~EwAlDWj@_FpLaA`CeCdGmGhOUj@Uj@gCbGM\\gF~LaFpLUj@}CnHoBvEoBxEm@tAUj@yAlD{CnHWj@k@tAUj@qIjSaA`CgCbGcA`CyAlDUj@aA`CWj@{CnHWj@kGhOWh@Uj@Uj@eCbGsDzIkApC}BxFUh@o@|AeBzEUj@u@tBIPSj@gDhJ[z@qBdGWp@Qd@mAhDQh@gA|C}AtDoA|CEFIREJuBdFqEtKcDtHaA|BiBfEqAxC[r@aDzGsFfLaHfNgCvFUj@wBzEeE~JUj@sDzIUj@Uj@iCjGQb@oIlScA`CUj@yH`RUh@_MfZ_FrLgCbGiEfKk@tAWj@mBvEA@}J`V}ClHyDfJaCxFUh@uF~MWh@k@vAwF|Mk@vAUh@cAbCKVa@tAWr@qBzEc@dAmJhUUj@Wj@eCbGeCdG{BnFw@jB{AjD_DjHmChGiDxI{@tBqF|PGNK\\y@~BWt@Ul@qBvEgA|Bo@jA{@xA{AhCUb@]n@EF_@r@c@~@eA|BKTeB`E}BnFyBlFqDzIm@tAcAbCeBfEgD~HUj@Uj@yAjDWj@_K~UiEfKqBvEcA`CUj@mDlIyDfJUh@Uj@yH`RUj@oBxESb@oA~CmHbQeCdGcA`CiBlE[v@Uh@_FtLoBxEUh@yAnDoMf[o@vAoCvG}AtDs@dBk@vAWh@aC~F}ArDUj@Q`@q@~As@fBc@fAgCbGeCdGk@vAm@tAaAbCUj@}CnHcA`CAFSb@Yp@Qd@g@jAcBbEq@~Au@pBO^[t@i@|Ai@xAO`@e@rAm@dBu@vB]`AABq@lB]z@O\\Sh@_@`AkDpIoBxEmBrEqB|EmBxEqB~EgBhEuD|ICFwC`H]t@Wh@yBrE_AxB{BpFgDhIeD`IQ`@qD|I}CnHwAlDm\\fx@oBxEUh@Uj@yOv_@Uh@qIlSk@vAUj@cGzNqOb_@kGjOyAlD_T|g@wVjm@iVrl@Qd@eHrPgAlCqA`D}CnHELeBbEuCdHiCjGiClGu@jBUj@iAxCi@~AY|@uB~GSp@gAlDuA|DyAzD]z@{BrFAB}AtDiBpEyBjF]z@iBhEKTa@|@aBfDOZuAfC{B`E{C`Gc@z@[p@Sh@gBdEk@rAyApDyEhL}AxDyHbRc@fAaQrb@qNx]iDhIUj@uAdDyE~KoA|CoHdQc@jAkCxGq@`Bc@dAiAtCu@hBgChGa@~@uC`HwBjFiCjGwClHiDhIkArCcF|LcE`KwAhDsDbJcCzFiCnGqB~E_@z@cBfEmBrECFeCfGoBxEy@pBGPcA`C}LjZuF~MqRhe@iAlCyAlDaAbCWj@gAjCuCfHGNqC|GuDbJUj@o@zAoDxIoBzEcHrPoD|IiCnGoBvEk@pAiBpEsBbF_@|@oA|CWj@k@tAkAtC{ApDyBnFUl@KTy@pBmBtEKXkArCKVaA~B}CrHKVyGdPGN}AzD_@bAe@nAYz@a@pAc@xAc@xA]lACJU|@Ol@YlAS~@WjASfAc@dCAHo@vDYdBo@vDc@rCoB~Ls@nEgAzGa@pBOv@_@`BCNWdAUx@I\\W|@Wv@Yx@e@rAQ`@IT]x@g@jAm@lAm@jAo@fA]j@a@l@INQTi@t@m@t@wCnDIHmAvAqAzAmD`EEDkE`FuBbCwBfCkBtBm@v@i@n@W\\}@nAk@x@_AvAu@lAQZGJ]l@[l@]p@m@lAe@~@k@pAo@xAUj@MVa@bAkCtGkBrEyHfRiGhOk@vAuF`NWj@oBxEUj@gEhK}CrHgIbSmEvK[v@uBfFeChGyBjFcJzTcHxPo@~AQb@aF|Li@nAs@dBmDvIuAfDUj@oAzCmBxEmAvCYp@cC|FELkApCiAnCyApDEJe@jAcAbCA@s@dBoC|GeBdEiEjK{CpHwHdRkUxj@Wr@u@fB}AxDUj@{BrFuDdJ_BzDmAvCu@jBoB~Ee@lAi@rAkArCc@fA_@z@i@rAe@dAg@nA[v@wAjDg@lA]x@kBtEyApDsAbDeBfEu@fBiArCkDpIk@vAUj@KTmCvGkBpEqCzGsAfDoBzEeL`YYp@wEhLAFuF`NWj@m@|AcC~FUj@Uj@yAnDk@vAk@vAWj@mBxEyAnDYp@_A|B{@vBgBlEu@jB{AvDcA~BUj@MX{Mj\\eCfGw@lBQd@Q\\]|@a@hA[x@CBKZUr@c@|ASr@IZIZKh@I\\I^QbAOr@UlAa@xBCLg@pC}@rEKr@y@nE_@lBQdAYtAe@nC]hBYvAI`@g@jCk@~Ce@fCUnAS~@G\\Sx@Qr@Ol@Sr@Sr@Up@Sn@]~@c@dAUh@OZGLUf@[h@]l@e@v@k@v@g@p@Y^a@b@o@z@WT[^gBdB{AxAoIfI]\\yAxAs@r@iAlA[`@wAjBc@r@o@hA_@n@k@nAMTIRo@xAaB|DoAzCSh@qA`DkArCaAbCsAdDsAdDuAfDk@tAy@tBaA~BgChGEJuAhDsAbDm@|AUj@O\\aB`EeAhCeAjCc@bAUh@[v@g@lA]z@aBbEeAdCADqA`DuAhDIRIP}GtPUh@uFdNsAfDYr@Uj@cAbCwAnDUj@aA~BWn@qD~Im@zAqF~MCFQb@oBlEQb@uAjDcAbCWn@i@rAwApDoBzE_H|PUf@aB~DwCjHy@rB_@z@Yj@cDbIqB`Fs@fBoAfDe@xAEN]fAADQn@WbAa@~AWtA]dBa@bCYbBQtAOvAQtBIz@Eh@?JIfA[bGIvA[rFQbDOhCU`EKhBMdCa@vGIhBMfCG~@Ev@ANGdAI|@ANMrAOlAMdAUvASjAAJ]~A[xAK`@Uz@Uv@Qf@[|@u@pBYp@Yl@o@pAs@nA}AfCsAvB_AxAuEnHILYd@k@|@qI|M_GlJaBfCs@hA_FzHsAvBsApBq@x@EDUZ[\\_@^A@c@`@oAfAw@j@s@f@kAl@uAj@y@XG@E@a@Lk@Pq@Je@Ha@DQB[Be@Dg@@i@@{BBcAAo@?_A?wA?mB?_D?wCAsG?sEAwGAw@?iE@eIA"
                     },
                     "start_location" : {
                        "lat" : 49.17672229999999,
                        "lng" : -103.0516047
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "68.4 km",
                        "value" : 68351
                     },
                     "duration" : {
                        "text" : "40 mins",
                        "value" : 2429
                     },
                     "end_location" : {
                        "lat" : 50.3974124,
                        "lng" : -105.4091931
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eSK-39 N\u003c/b\u003e (signs for \u003cb\u003eWilcox\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMoose Jaw\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ohopHvbq}R?fD?nI?jJ?T?fL?fL?X?lJ?t@?Z?tA?nFAfBA`BEdBANAb@Cv@IfBO|BKxAAFCRQjBMlAUjBCJa@nC_@nBo@xCo@hCw@hCoApDg@vAiAlC{AtDCFQb@eCfG{GpPuDhJcAbCUj@uFfNyCpHuHbRABUj@{D|J_BbESh@wGfPmAzCc@dAkErKsAfDUl@cAdCaA`CUj@oCzGKVUj@kOj_@gFnMeChGSf@{EpLmEvKaHzPgEjKuQfd@Uj@gEjKUj@aH|PUj@aAbCmGxOoF|Mm@vAO`@_D~HuClHmGrOUj@aAbCeChGyAnDmBzEmCzGuAlDmBvEsBhFs@bBaDbIsBdF{DpJ{CrHwHfR{CrHaEzJm@zAoBxE}CrHMd@oCxGKT{CvHGNMZGNQb@gAjCoD~IUj@uLdZcSdg@Sd@Uj@KTiInSwFjN_H|P}JxVyElLaJ`UaA`CeAvCo@dB[z@oB|EsCdHu@xAwChHuAhDmAtC_BbEiApCkArCeApCoA~CgAdCaBlE{AtDs@dBy@rBaBdE_A~BaC`Gy@lBeAlCcAdCaA`C}@`CGNqCbHaB`EaC~FqChHIb@eElKkGpO{ExL{LrZaAbCoA|CyKlXkItSaBrESh@gCjG{b@lfAeChGgNj]sOd`@oAfCkCrGiC~GO\\oBxEqEvKS`@uAnDuQjd@e@hAmKzW{LrZk[tw@oK~WeMh[kKzWsBhFmEzKcBlEUj@e@lAYv@uAnDeCfGUl@Ul@CFiErK_B~DgAnCqBdFe@nAeAhCw@lBw@nBgBrEy@nBc@fA}@zBKVq@fB_A~Bg@lA[v@eApCuAbDCDgBtEKT{@tB]z@sAbDy@rB_A~Bo@~AiArCk@xAy@pBkAtCEJsAhDq@dBc@fAMZGNcAbCUj@w@lBaAhCaAdCcAdCcBdEkBvEgElKUl@ABO^qLdZyBtFUj@_H~PsFfNuHjR{EzLcAbCoD`JiGrOIRsEfLUj@}ExLk@vAcChGUj@qHbRQb@uDdJSj@aA`CINeFjMMXaFbMeGhOO\\CHsTlj@Yv@g@nAmG|OsHlRgElKUl@{EzLwAnDiEvKSb@mB|EUj@wApDUj@yErLuFnNUj@uMl\\uOn`@Uj@qMb\\Uj@o@`BiKtWuJrViGrOyCtHqC`HyAnDUj@i@pAqFfNsFhNwLvZUj@iGtOwApDUj@wDrJ_Nb]gLvY}L`[}@zB}GbQaAdCcCrGqAzDqA~DmE|NgIdXmDlLkn@rtBqDlLoKz]Qn@Sn@Ql@_BlFmGxSSn@qEjOmA|Dy@lCgGpS_GpR{CzJcInXaBbGc@xA}AdGkAjFq@zCOp@mCfMsAbHs@lCo@bDcBfH{AvGcAxEmCfMmA|Fo@vC_GlYgDnPeFzVu@pDoJxc@sAdGaKxd@oDpP}AhHwApGERYpAOp@Op@o@vCOp@Qz@}DrQ[zAQx@_@`BWhAOp@]`Be@zB_@`BWhAm@rCm@rCw@lD_AdEeA~EAD}AlH[vA_@bBMp@WhAWhA]bB_@`BWhA]`B_@`B_@bB]`B_@bB_@bBg@zBKd@Q|@_@`B_@bBe@|B_@`B]bB_@`B]bBWfAmAxFeCbLkBvIQt@kBvIuAnGuBtJg@|Be@|B_@`BWhAOp@On@I^Mh@e@zBm@tC_@bBm@rCWjAEPOp@Ov@WhA_@bBu@jD_AdEu@lDUhACHi@dCe@zBmAvFw@jDg@zBu@lDy@xDCJo@rCuAnGe@zB?BmAtFeB~HyA`HADuApGg@zBw@nD{AhHeB`I}AhHu@fDOp@Or@_AhEOp@ETgAfFe@tByEpTOp@A@aB`Ii@bCsAdGsAhGg@`CYnAg@|B_@dB[pAGXCNIp@{@zDQt@q@~C_AdEmBdJ_@dBqAbG]|AaBzHKd@wApG}BpKq@bDg@bCWjAyFvWwAvG{DxQWlAgGhYeB`IOp@uD`QgBjIkAlFeDpOsCtMs@dDi@fCw@pDqDtPy@rDgR`|@_@bBCLyG`[Op@kN`p@yQ`{@}Hr^gO~r@mH`]Or@}AnHOp@_CrKI^ERmAzFuCzMI\\sBpI[rAy@lCaApCkA~C{@vBo@xAiAvBkBjDSZWf@aGjKiApBqA~Bs@lAgB|CcCdEyCjF_CbEYf@mExHgB|CyGpLs@lAs@lAYf@mBfDaDtFWf@uDpGsDrGoI~NWd@oEzH_CbEaBrC]n@kAvBkAvBiClEmFfJ_BzCOV_CzEABWj@{A`DoCdGiCtFcAxBWj@KTKRm@jA_@l@k@x@IHY^k@j@y@v@a@R_@TuBfAa@La@LYF]Fw@Pw@Ag@?e@?S?e@@gA?"
                     },
                     "start_location" : {
                        "lat" : 50.0546421,
                        "lng" : -104.6226838
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 334
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 50.3968558,
                        "lng" : -105.4085423
                     },
                     "html_instructions" : "Take the \u003cb\u003eTrans Canada Highway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e ramp to \u003cb\u003eMoose Jaw\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "yfrrHlvjbSs@c@WQQSACIMIQCICGCSCQ?EAG?U?Q?G@C?KBO@O@EBKDIDMDKFKFIDCHGJGFCJCJ?N@JBHDHDDDJJJPBDBFFPFTHh@@HTxA"
                     },
                     "start_location" : {
                        "lat" : 50.3974124,
                        "lng" : -105.4091931
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "600 km",
                        "value" : 599837
                     },
                     "duration" : {
                        "text" : "5 hours 43 mins",
                        "value" : 20594
                     },
                     "end_location" : {
                        "lat" : 50.863844,
                        "lng" : -113.0054361
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eSaskatchewan's Hwy of Heroes\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Alberta\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "kcrrHjrjbS@hA?jA?jAAjF@vI?xC?fC?pG@lF?|A?fDArI?~@@vL?dM@~@?dL?fCA~E?xC@zK?T?vG?tJ?~A@rH?rG?zD@b@?~@DjCFfCJxCJlBPdDD`ATxCRfCLjAn@lFf@xEt@hG^vCRlBVtBn@|Fp@|FX`CNrANtAbBpN`A|G^fDR|BLdBFrAJfCBjB@dB?dB?f@GlBGdBGjAG|@C`@I`AIfAK`AWlCADo@lGWzBQhBGh@eAhKEXg@vE?@u@fHMrAWfCs@tGALYrDQZCFAHEb@SxBEf@I~@Iv@CTUrBMnAEb@_@tDIt@AFk@bGi@zEKbAe@jEcAhJa@vCs@zDGXOp@I^u@dC_AfCi@jAe@`A[f@mAfB}@dAg@j@k@l@_DzCKJgAjA{AvA]\\wCtC_@\\]\\{AxAsFnF]\\uDrD_@ZyBvB]\\uEpE]\\]\\yPnPcIzHyGvGwAvA}FzFyAxAiApAkBfCoAxBy@zAq@|A{@|BIRe@zAkA|Ew@dE]vBIh@iBbN_BrLu@pFkC`ScKlv@OjAQjAUxAa@zCKt@Id@g@lDeBdLYjBa@vCOdASvA[~BWlBSfBCR]rDUfDQnCMfC?LItBIzCCxAAZAl@AzB?|C?lD?x@?NAdM?~H?@?|K?|AArH@~C?dK?lCKtF@f^?b@?|J?x@?v@@v@?v@?bM@vL?vUAd[?v@?hb@AzN?jK?jR?x@An[@nY?v@?v@?v@?lR?v@?pB?fD?hb@?n^?vM?zG?pG?jR?v@@dr@?v@@jR?x@@~\\Atu@?v@?pI?fkA?lp@?x@@bk@?~E?rg@@|K@n`@?`F?nB@bM?`o@@jK?v@?pIBnE@rG?fA?pB?~A?~BAvD?nDCdBEbCCfAMtDIhBMpBEp@?DWhDYdDe@hEM|@_@hCe@xCe@dCk@tCmB~IIZeCjLkDxOuHp]qB~I_@dB]`BaFdUOp@qId`@o@vCo@tCOr@_AhEeEjRo@vCo@|CY~A[xAOp@Mj@{@zDsAxFgErRqH|\\Op@sKlf@kFdVeA|EOp@q@vCoA|FoGxY_BnHOp@oA|FaAhEoGxYoGzY_BnHaIr^yAvGa@lBqCjMw@hCe@~AiCzI}AnEqAtDkB|Ei@xA_BxD_@v@cAxBcAxB[r@mCbG_FpKcXfl@oN|ZkUjg@mTne@}AjDmAlCqBpE}AzDsApDaAfDSl@CJq@fCENc@hBWlAUdAo@|Ca@`Cq@fEs@pEm@hDkDpTcLrs@eBfKoAbIwCrQMt@w@zEQ`Ba@nDEf@UpCKpCC`CApB@zBD~CVzFFn@Fv@NzAl@bHFn@?D~A~PbAfMlAlNXbDtD~b@ZbDfElf@XbDbEte@|@~JdDp_@Ft@Fv@vD~b@XbD`CtXHv@r@fIz@~JvGxu@Fv@fMrxAtAbPHv@z@~Jz@~JxB|Vj@rGFt@b@zEFt@fBpS@Hh@fGdAvLDj@nAvNHt@`@zEb@`FtBlUV|CFv@`@zEf@zFnBzTHbAb@zEXdDfBnSFt@b@zEFt@r@hIFt@`BfRbAnMLdCHhCFzBH~L@^BpL?`]?bMAhb@?tW?pB?nc@A~s@?v@?tPAhU?vF?vW?hD?fD?lR?x@AzN?`F?xgB?jy@@`d@?v@?`F?dT?tP?hb@?bMA|l@?v@?rRLrYl@r]BpBBv@FfD@v@z@pg@vAzz@xAnw@B`D@d@BtC?~A@~CA~FEdNGtP?v@IvWGrPQ|b@M`WCdGAdCIdTAv@Md]M~\\?v@?v@ErIAnB?x@CfD?x@C~EIdTI~TEbMGpUGhMAnBGtP?v@ChDEzNAnBAx@CxG?v@GbMI|UErI?nBAv@CzG?v@AtDCxGAhDApBAnBOhb@AnB?@?v@Mf[C`FAfDErI?v@CjGKxRAxGAv@Odk@Av@AxGAv@A`F?x@?FAn@Oxe@ApB?BGdVInQ[fy@Av@CzGAfDApBEjKEpIC`FCtG?B?x@?fD?x@@hK?x@?pI?v@@zG?v@?jK@dT@nY?v@@ji@D`S?hD@pBD~\\DlR?`F@v@@rIDf[@xG@xGHze@?v@DnY@xG@`F?v@BlTFxEH`FDhDbAlt@HpLB`FDfHAxG?vF?ll@?|N?bM?hD?xG?`F?xe@?`VApP?x@?tC?PCnCIxCG|BYvFi@vHCRIt@It@aA|Jo@jGKx@It@o@dGc@dEa@bEGz@IdB?BCt@Cn@ErBCrB?@?nB?~@Br@DhBHdBH~ABZHt@?FZrCXnCNhALhA\\|CJbANzALjBJvBHzBLzGJ`FZpODvAb@xSHrDH~EVpNDpANrIJrI@lF?L?x@?rP?`F@zG?r@?|G@rIBzT?xA@bCClCIvAE~@MfBk@~DcB~JuBzLCXOnAYdDg@rG_@|Ee@pG_@|EMhBQpBs@jJIlAGt@Ex@MlBCd@ANKxDA~AC|AIzHKvFKxGMpIIhFGvEI`FGhDQhKEhDGfDMxH?pAA`FAfDAx@A`F?nBOnm@?|AAx@?fD?x@AhKCnYC~UAxG?v@?xGCzGC|G?fF@|N?rBFnX?ZDfOFbY?v@?bBBnF?v@BbI@fB?nAHvGB`ABv@DnB@j@ZtI@F~@nR|@xQDv@n@lMJvCL|CJtCDrANjEH|Dr@t^pBrcALxGXzNr@t^LxGPhILnHD|ADxAL|CL`CNnBZvD`@fE@FHr@X`CbA~GjAjGlDjRZfBfA`GNr@tAtHvE~VlB`KbDlQz@lFLv@@DTdB@HN`B|@~Jb@tERbCfAvLh@tGlA`OPlBr@fI~Dne@L~AXpGDzADxA@tAChBCjCGrBOlCIhAKtAs@lGwIvv@UjBIt@s@nGuAxLs@fGeC|TwJx{@iAzJIt@sFrf@i@vEIn@m@nFwBvR{@zHo@rFSjBs@lGKt@s@lGIt@}@dIwCvWCP_@`DsAnL_AbIq@lGwB|R_DvXYfC[vB_@hCQnAyA`Je@jCIb@g@zCsKfn@Mr@Mr@Mr@sJlj@{BtMMr@sHxb@[fBcAbGkBnKw@dFKr@G`@OfAKt@[`C_@~C_@~CYtCKfAi@~FK~@WxCGv@k@|GcChXIt@yAbPGt@a@hEaCjWWfDGt@?@UtDOzCIxC?HEdBEhBAhAG~E]dXMrIAv@Av@i@jc@c@r]]tWEhDSrPAv@[|UAx@QzNAv@EtCM|KClBAvA?`BDvBFtADbANzAJfABJHn@Jr@Lp@ZzA^xAd@vAL\\Tj@`@z@LXNZp@fAt@hAf@r@rBnCpAdBv@fArCxD`EpF`FvGZb@Z`@DFp@~@\\`@nBlCnBjCZ`@Zb@tAhBZ`@Zb@Zb@Z`@Zb@pEdGNP`MrPZ`@xIlLn@|@~@nAn@|@V\\BFXd@b@n@p@lAt@zAJTVj@JX|AbE|CxIHXTl@nAnD`ApCRl@`@fAzEnNz@|BbAtCrB~F^fAnAnDh@xAp@~An@xAh@hAt@|AdApB|@|ADDnAtBhAbBhBbCnCdD~CtD\\`@d@j@bExEh@l@NPnG`HpCxCl@n@LNdEpEvEjF\\^PP~BtCn@t@z@dAb@j@fCbDpCrDfC`D|DbFPTdAzAp@bAd@z@Xd@fAlBt@zANVv@dB\\r@^z@FNVl@z@zBZ|@d@vAd@tAj@hBv@~B|@pCTn@\\bAZz@f@lA~@~BbBpDrBhEtBrEVh@zBzE~DnIfGnM~AfDvExJ|F|LtBnEbDbHl@nA`BjD~DpIh@fAt@~AnCzFHNLXhA`CdDbHVh@vAvCVh@BFj@jAVh@n@tAbD`HBB~AfDVh@fA|B|DpIVh@vBpEVh@nFbLjHpObCdFDJfAxB|AhDVh@`@z@dCjFn@rAVh@~AfDXl@lCvFl@nAfAbC?@t@jBf@xA^lAb@~A\\|APx@P|@^|BVrBLnAF~@HdAH|AH|ABhABbA@`A@|B?|@?jF?|M?dF?|A@hDAzB?zK?v@AjI?tM?|C?fD?x@?lA?|O?bLAhE?pI?xG?lYAvX?vJ?nO?nB?x@?`E?nC?v@?tH?\\?fS?Z?x@?xG?bA?pU?Z?Z?|H?~C?xM?zM@fB@tBBvB?NBv@BbADbBBf@DrAH|APhDVzCHfALrATrBRdBNdAHt@@HTzAh@rDvA~IPjAd@xCPdAJr@ZpBT`BPnANpAHn@PlBLnAHdAHrAJjBRpED`BBtBBrB?jBAhCAhBE|AEdBMxE{@dZCv@QvGmB|q@]bMsBrt@K|CEtAG~@E`AG~@O`CKvAKvAO|AMfAIt@CTMfAK|@SpAE\\QhAk@jDe@fC[tAc@rBqAdFu@tCqFlSqUd|@}BtIwEhQsMtf@Qr@u@nCyArFa@`B[vAOt@SfAObAKt@EZGb@CPK~@Gp@Gp@IbAGhAE`AGbAWxGE`AWvGMzCU`Gc@~J_@~JG|AEv@InBOxDUlFWdHiAbXeBdd@Ev@GjBObDOnFEjBClAArA?pBA|G?bB?`L?l@?v@?|B?tE?`F?dAAxZ?bM?v@?pI?v@?x@?tW?rP?pB?rP?xG?`A?bR?zCAtM@bZ?nK?x@?v@?tN?D?rP?x@?nF?tS?tA?Z?r@?B@bABfB@t@@NHbDJzCHfCXvHZhKNhEDlA`@vLXrIHrBDr@H~AV~CThCFp@NtAPhAl@bE^vB`AbFhBbI|D~O@FnA`G`AjFnBvLh@|En@dGn@rI|AhUDv@b@rGFv@rBrZFv@b@rGFv@LlB\\|ERdDv@zKHfAJt@L`A`AlHv@bEr@zCJ`@n@bCDLbA`D`BpE|ExLnK|WVj@Tj@pD`JzCtHdChG`AdCnB|Ej@vApD`JvApDVj@fEnKxJpVTj@lMx[fAlCnDtIDFVh@|DpIfA|BVj@~AfDVh@Vh@lC|F`Pd]xN`[vEzJ@BrAvCfApCTn@L\\z@vCh@xBj@xC`@fCTlBRtBDr@Fr@?@Dl@?HB`@D|@@t@Bx@@`A?xA?dA?pB?L?x@A`C?nE?v@?j@@vK?~B?f@?|H@fJ?xG?nB?lR?v@?rP?`F?jR?rP?x@?fD?v@?xG?tW?x@?pI?v@?v@?xG?x@?xG?nB?hD?v@?pI?hD?nB?hD?bM?jR?jR?rP?x@?xD?jK?|U?lY?v@?dT?nB?v@?pB?~E?dT?dw@AtW?v@?hK?xG?xG?zN?`F?v@?`F?xD?|M?fI?v@?fD?x@?~E?x@?rP?v@?pI?|U?v@?zN?pB?fE?hC@`Y@lF?v@@dN?T@hD?fD?t@?@BbH@dG?rD?`F?fD?hA@rDBtAB~AHjBH~B^xHN~DDt@\\nIBv@f@tLNnDDhAVrGH~Ah@hMR~EDv@NfDBv@n@tNv@dRNfDBv@d@dKBv@d@xKB\\HtBBv@VbGJfCJ`CT|F@XRxELrBFbALpBFd@PzANlAJj@Jr@?BP`ARdADNNp@l@bCf@rBPn@Np@@B`@|ANp@b@bBNn@T|@Ld@bAdENp@bB`HlBxHp@hC`BnGfCtJLh@jBbHl@zBj@vBlCvJf@lBzArFtB`IlBdHbAvDrAjFXjAVfAR|@R~@X|Aj@fDXhBb@zCHr@l@vE`A~Ht@bG@Fr@fGvAjLTrBt@bGJ|@Ht@f@xDBZJt@n@dFd@fEjAlJ`@jDnBbPh@jE~AtML`Aj@vEb@pDZnC~@pH|ArM`A|H~E~a@bCdSlAvJdFdb@Ht@bCdSvAjLJt@jAvJj@vEThBnB`PtBbQvBnQzEn`@lCtTv@|GbAfIl@bEj@jDl@~Cz@rEdBdHhA`EPn@pFzRbAnDBHn@xCl@tCNr@@Fn@pD|@bHVhCLvAP~CLbCDpAFrCDhDJdIv@tl@HpEH`DTtFDt@Dv@PvCR~Cx@nKnA|OPxBNlBXlDLbBFv@f@pGf@rGFf@h@~GFv@~@pL~AtSbFzn@RnBvBzSr@dFjCbQThALr@zJzh@hFzXNr@nI~c@|D|SLp@tBzKLr@lJfg@pBpLTpAdA`FjA|FNr@l@tChBhHb@dBv@hCf@|An@rB^fARn@bBhFRh@`ClGtArDj@xATl@lChHjAtCj@vATl@|ExL~I~TbHlQTj@vLzZp@bBjBrGLb@DJPn@xArFjAlG@FrA~Hh@rEFp@bAzJLtARvBx@tJRvB^|CbA`H|@bFZbBxBzIrAlFxCrLNp@xCtLxCtLH\\f@rBbA`ExCrLb@fBPr@x@bDLf@hBpHPp@@Bb@dBdErPf@vB~@rDPp@`@`BtJj`@fAnEbAbENh@@F`@`BPn@Lh@Pp@Rv@Np@Pn@Lj@t@vC`@|A?BPp@Nn@r@pChChK|@lDt@rCd@vBf@pBPn@`@bBr@rCNp@Pp@t@lCVhAnB|Hb@dBt@vCb@`BZnAr@rCJb@Nn@DNlA|EFVJ`@@@^zAr@rC`@`BPp@p@hCl@dCRx@@L@LfAbEnAxEbCnI~CtKf@jBlMhf@pDvNfAhEnCrKt@|Cf@jBh@~BBJBHPp@BLt@rClCvKn@|BJb@DNJ`@DNpBhIp@rCJ^Lf@HXf@dBp@dB|@vBN\\BFRb@BD?@|@zAdA~A`DlElD`F@BfCnDzB~Cd@l@dArAh@p@Zb@FHf@p@v@jAd@v@R\\NZHRTh@\\~@^bAd@lBBFDZVjAVdBN~AJfAHhAFlA?L@t@@pABvJ@dAHjYJz\\@hD?v@FvP?rQBpB?v@HfIHrX@lDB|ENte@@ZDnQ@zABxJH`^B`MDvK?v@?hBBhF?L?f@@rA?vDAtA?JCdBC|AEbBG~AI|CCXEt@A\\Q~CUrCGn@MtAEVWdC_@xCSpAKt@yAtJ[lBaBhKiEtXu@zEObAu@|E{ArJETYdBSvAOfAKt@?@QzAQ`BW~BKpAKjAIdAMpBI|AI`CIxBG`CEnBAtAAzB?nB?nD@rA?D?p@FlI@rBFpIHjR@v@FxN@v@FhKB`F@nB@nBJbTDpIFzM@zBD~HDzIFfDHxDJjCHrBJ|BLvBLrBV~CTvCT|B@HVfCThBBPPnANnAL|@XfB`AdGJr@hDhTXfBnAzHJr@Lr@hFj\\xCbRNr@P`Ah@hCn@tC`@bBLf@x@zCFRvA~EbAtC`AfC`BnEvB|FxDxI|@pBdDpHtInR|DxItHpPpBpE|AjDlKtUjC`GdA`Cj@tAVj@bA`CVl@nBvEHPrC~Gp@bBP^xAnDj@vA\\x@jDpITj@xAnDTj@nBzEdKzVfDfItE`LRd@bBfEz@tBf@nA\\|@`@fAl@`B`@jABH|@rCr@zB^vAz@zCj@zB|@|DZrAPz@rA`H`AnElCxMf@hCNr@Np@fCfMlA`GLp@Lh@~@rE|@jELp@bIj`@xFzXh@jCZ`B@BhChMLr@tEfUNp@FXdAbFLr@|@hENr@zBtKnAbG~AbIzApHJh@@FNp@xBvKlA|FLp@^dBjA|FlA~FhCfMDRH^bG~YNr@nI|a@lBbJlBhJj@pCNp@zArHrAvGNr@vEfULp@|@jENp@zApHNp@jA|FzBtKrHx^FZNp@jA|F\\dBlA|F|@jE\\dBhDlPzApHLp@|@jENp@fEtShCfMjBbJvEfUjA|FlA|FvD`RXtAtA|Gr@lDjB`Jh@hCnBpJVpApApGZzABHpAnGz@`ExAfHH^|DrRzDnRdCzLNp@\\dBDPtA|GPz@dAdFh@hCnBtJNp@hDnPp@bDh@jCzBtK~@vErBzJtE~Tr@lD|@hEXvAdA|ELl@Np@TfApApFj@zBPl@bAvDf@hBhA~DZfAnDjMl@tBNn@Xz@l@|B|CtKbApDp@`CdCtIbApDvBxHv@nC\\pAnAlE^rArAtEvAfF@@Pl@v@nCPn@Pl@v@pCPn@\\lAjAbEfA~Dz@xCrAxEDJPn@vBtHZjARn@fA|DRp@vGpUPp@d@|AzAnFPn@|ApFr@hCTt@lCnJDNPn@|ApFv@nC~@dD`AhD@DNh@Pp@x@tC|@~CPn@Tx@~@~CfA~Dp@zBn@zBdA~Cj@dBd@nAl@|ARf@Td@`@`An@vATh@tBjEpDvH`DtGVh@`BhDvErJVf@JVrDtHVh@p@pAP`@DFtArCbAvBr@vAvHzO`@x@Vh@Vh@rEnJBFXf@vBpEtBhEVh@x@`Bd@bAp@rAVh@`ArBlAdCv@|A~DfIj@jAfAzBVf@`BfDBDR`@~AfDn@rA~AdDnLnVbBfDfAxBVh@fBtDxFfLFNVh@JT|@jBz@jBl@pA`@bAVn@n@`BhA`Df@xAjE`NtDdLhAlDRn@lDxKrHnUb@rAPj@@BtBvGdA`D~HnVlGrRTn@d@vAd@bBjA~DrCpJtAhG|BjMj@tEzBjQRzApCdUjArJj@tEHt@v@jGlCvTxBhQHt@j@tEJt@^~C~Gjj@Jt@Ht@bB~M`@~C^~CJt@v@hGHt@v@jGHr@xAjLfAxI|QzzAHt@v@hGVxBPzA^fDVzCB^V~DXfG`ApV\\lIBv@D|@zBvm@b@|LP~ELdDZlIt@zSVtGLxCV~FhAxZ`@dKh@rNdAbYdBtd@`@|LDt@bBhg@HfBd@bKlAnWjAdNd@bEf@fDZlBLp@RjAdB|J`Mnq@rA|GbAbFtAfG|BjIjArDhCfHh@xAvArDzGbQ~@dCvApDjA~C`ClG`CjGTl@jB~ETj@`@fAlCzGDNnAbDbLbZnHpRdI|STl@jHdRxDdJb@`AJRxDzH|ArCh@|@dBtCxElHt@jAZb@l@~@dFvGdZr_@zGtIjInKHJzGzI`BpC~@dB\\z@Zr@zAlE\\hAb@xAnB~INp@tCrMtE~SH^Np@j@hC`CvKt@rDh@~BfAbFjAtF`BvHhBhIpBpJ^hBx@bE\\lBLr@^vB~BxNhJtj@|AjJLr@Jr@t@nELr@Lr@`AbGLr@Jr@zDxULr@lBnLrBbMpEpXzExYfAzGnAzHXfBl@~Cd@dCR~@Nn@ZvAd@lBvAdF`@lA^fApAlDzDbK~BbGxAzDpBdFZ|@xBxFjD`J`AjCRj@?@Rn@Rl@Rj@fAvDRx@Pp@Tz@pAlFpAhFdAjEr@vCb@jBn@jCv@bDJ`@nAfFnAdFz@rDJb@zAjG^zANn@Pp@hDlN@@~A|GvAhGn@xCf@lCn@nD^jC`@tCJbAJt@BXXrCRvCFr@VpDLhDBh@Bv@FrBLdMAd^?v@A~L?xL?vUAnI?fKAxfA?|W?pR?v@?n^?v@?fK?v@Axc@?fK?nW?pP?nPAnI?nW?vNApI?v@?nW?fD?vG?v@?rC?vP?vN?v@?nI?fD?xU?v@A~E?~E?fK?vG?fR?x@?hI?|@@nI?~a@?nI?~E?xN?v@?~L?fD?vU?v@?fD?v@?vG?jO?vG?v@?pI?v@?~E?nB?fK?v@?xq@?~Z?zN?v@?hY?v@?v@?paA?~Z@ni@?~E?`p@?v@?vG?~E?fK?~L@hK@nP?nI?jCBxCBh@BpAPvEhAxTt@tNt@pNDt@p@rMl@bLhCvf@Dv@~@rQFxBBv@LhE?lA@v@?lA?nCAx@?v@AnAOtHQnISdKa@hSOlGOlICv@sAzo@K~ECnBOtGGfDQnI]lPCv@_@dR_Anf@IrDAzCBdDHnDBl@PdDPjBJpAZbCDb@l@rDJl@^fBNn@XpAl@tBjAhDlBtEfH`OtBnE~DnIfGjMVf@vExJVh@tEvJVh@lAfCfE~IvBfF?@n@dBv@|BTn@FTv@bCdAnD@BZlAz@rDhA`FPz@jArGpAhHHb@|@fFvApIxAlIfElV\\tBf@vC^xBp@`Et@jEJh@b@hC^pBR`ALv@V|A\\pBrEzWvCvPBPnAbHBNb@lCLv@b@bDb@tDJ`A@HFt@JbALfBHpAHlADx@H|AD`B?VFbBBtA@vA@tB@v@@zABjH?R?b@?`D?dT?xH?~b@?VAdGAnI?fK?nI?v@?vo@@tE?fD?nBBv\\@~S@~HHxCJbCR~DRdD\\lD\\xCPpAJt@@HV`B`@~Bz@nE`@zB`@|Bx@lEvAxHzBvLdLbn@|CrPnC`OnC~NzDzStBfLVtATvAfJbg@tArHNp@tArHLr@vE`WdBdJLr@vJth@bBdJLr@p@pDRnALr@RhAn@pEj@lE`@dDNtAHt@Fh@b@dF`@vEXbDLpAx@~J~Ch`@x@tJDh@@LXlC\\`Dx@fGl@lDJr@pAvH|BnJfHfVnEdOv@nCtIvYPn@fLd`@tEtObEfNf@hBfAvD`BnG`A|D|@dEj@vCP`ALr@@FdAlG`BlK~BjOdB`LfFl\\Jr@dBbL~DnWLr@Jr@Jr@rBvMJr@xAlJLr@jEdYfB`LJr@bK~o@~AfKl@`EXtBb@~D@HTdCP|BH`APlCLxCJfCD|BHnH@lW@|EFhiA?pN?vG?tGAvq@?v@?~L?v@?fK?v@?dg@?v@?fR?v@?nPCtG@fQ?V?^?~L?~I?~O@fRAbN?rW?vG@pU@lLBhH?v@B~GF~CL|EFhD`@nJd@bHnBjTFt@tGns@Ft@pAfN`Gbp@j@~FnChZHt@~LtsAFt@l@lGt@dIr@xHnAfNFt@j@nGHt@|@xJdClXfApLFt@PjBjBhSXbDHt@dApLl@lGdClXPjBPjBFt@bEbd@n@xGj@nGnAfNnEbf@fApLHt@j@lGZ`DFt@l@nGX`DRjBt@dIFt@b@vE~@zJFt@z@fJJfAtB~TfApL`@dETbCDn@F|@fD|^`AtK`BxQBTrCxZ?BTdD\\lFN|CHzCBfA@~A@v@DdD?B?r@?~E?fD?v@?~SAnIAdY?pL?d@?d[?~EA|a@?lQ?v@?tc@?v@AbI?zB?nL?fR?tc@Atj@?|v@?hC@|F@nB@zH?dP?lvA?v@?bt@?~E?vG?nBAfK?dYAne@AtG?rQAzC@`M?nC@jP@fE?~F?bCA|BEjDAx@KnIItGK~IItHExDAjDChG?@?t@?`JAtQ?~E?hHAvG?dB?hF?|E?v@?f@BnIDhGJhFF`CDlAJtBLtBf@~H\\|D?@PhBN~An@xGtAdNv@bIhEfc@Ht@dElb@v@bIPjBd@vEHt@PjBtC~YHt@rA|MrEhf@Fl@LnBTxDLzBDlAB`@JzD?BBr@DbBDbCBdB@bB@|BAzC@pJAdL?zEAxQ?`CAt`@?v@?v@?dY?fB?v@?fRAtN?vG?fD?nWC|S?v@AjXAp]?~S?v@?|S?v@?|P?`F?v@?~S?vN?v@@tq@?jBChg@Ctw@?fD?fD?nB?nB?lB?~L?v@A|o@Gzo@EdYCjI?z@@`LCfD@dE?BDnFD|BFjAD|@HhA@ZNnBHbALlAPxAJ`AT|ATxABJn@tDbAzEpB|INp@~@fENp@Np@nC`MLh@@F`AfENp@Np@Jb@BLNp@zBrKx@xDd@tBd@rBLp@Np@Nr@h@|BDV~@fENp@n@tC^bBNp@pB|IrBfJp@~C~@fEnEfSn@xCn@tC~CtNNp@nDdPhAbF|AhHFXh@bCTbAVnA^tB\\rBT|A?DJr@DVPxAVtBRjBNbBNvBNzBBh@NpCD~@DbBF~ABpABjB@pB@tA?~D@jA?`S?nG?zo@?nB@fK?fRA~S?vN?dC?hL?v@@tc@?v@?dK?~Z?dJ?nB?|a@?nB?nI?fD?vG?nB@lW?v@?vG?~E?nB?lP?v@?fK?~E?nD?vN?~L?v@?dK?nW?lI?nI?v@@l^AfR?lB?xI?l@?nB?dO?fU?v@?vN?v@?bA?hDAzAAz@C`DAtAEhCC|@Az@MxEGlBCl@?HMdDUvE]fHw@pOEv@UzEEv@QbDa@jIeAtSm@xLc@pIOdDQdDCt@KnBQbDCv@KlB[rGQdDIlBEv@QdDKlBIlBEv@Ev@g@vJMvDS|FExCE~F?~C?~C@rBF|CDlBH~APlDRhD@N\\hE?Hp@zHbAxJBLFt@\\`D@Fj@dGl@lGHt@VnCT|BPjBHt@v@bIHt@Ft@v@bIZ`DRjBv@bIhAnL~BdV@NFt@l@lG?Dd@~FH`ALfBNlCLhCDt@?@FhBLxDFxB@\\@x@BdC@bDAjE?dD?rAWvSI`GAv@YdVGhCIpFKxIGrEO~MGhEEtCIpHIbGEhFSjPAv@UdRw@lq@AtI?v@AfDCpK?lN?hJAv@?zE?B?tGAdD@`T?nB?v@ArMAhK?pJ?t@?~E?v@@RAxOG`}B?`O?dDB~EJ`EFjBF`BRvCPxBVjC`@zCVhBNdAh@zCd@tBVjARx@Rt@L`@Pn@@DZbAdA|CPh@zAbElG~Pl@|AzBjGL\\~FhOZx@@B\\~@f@rAn@hBjAzCb@lAn@`B^bAVr@BHLXTp@Tn@Pf@Tr@Z~@Pn@J^Nl@Np@J^Nn@Np@Jh@d@zBNr@Z|AZbBd@~BNp@`A~EvAfHb@zBnMto@l@vCvAfHdBvI~@tELp@|DzRr@nDXzA^fB`@tBb@tB\\fB`BfILl@ZxAd@dC`@nB|CtOnBrJnAjGlBpJXtALr@BHVpARdARhAPhALz@Fb@D^DZ?@Dd@@LD^Dh@Dd@Bd@@LB^Bl@Dn@B~@Bf@@d@@n@?x@@n@?T?LAlA?RAfCAvAAv@C|CA`A?v@AjBCpBG~GA`AA`CAjA?ZAfAAlBCbB?VAr@?BAfCAhBCtBArA?B?t@Az@AvBCvBC`CAfBA~@A|AArBCfDAtBEzD?jACrC?ZAfBCjCCtCCdDAt@?r@?BCjC?ZC`CA|AAbAC~CCvEE~EA`CElE?h@IxKAfBCbDCbEGfHExF?l@CzDCnCCfCAtBAlBClCAvAAnA?ZArAAhBG`HE|ECrDA~A?`@?TAr@AbCC|A?XCdEEfECbCCvD?h@CbDE~FCbEEjGEpFCvDCrDE`E?b@Ax@AxBEnFAtBAdB?`B@~ABfBBt@Dz@RzEXlH?BJlCJdCPtEPtEVlGP`ERbFHdCNtD^zIv@lSFdBDt@Bv@PnEFpATxFBz@Bp@TnFHbCJlCFzAFrBDv@JtCNjDNlDLhDJ~B@b@NjDJ~CLdDBv@HlBP|EF~AZlJRvF@`B?vA?vACxAEfBG|AAVCj@IdAY~CM`AMnAUvBQ~AsF~e@oClVKr@qBlQ]~CoFle@iDvZk@`FmGlj@UjBgAtJsCzVeCnToCdVKt@kHlo@mDf[_@~Cw@bHOrAAJKdAEn@KvAABOdCQbD_@bH{Dvt@Et@mB~]QdDc@hIEv@Et@Ev@}@dP]rG]rGE|@y@xOi@`KKlBEt@gAtS]rGg@rJUjEeAbSmAlUStDUpEYbFeAnSkAnTEt@gAtSUvEcD`p@EjAE`BExBCnC?p@AdA?|@BnC@z@@z@@jALvFNbGPpHNzFDvBHzCNxGNbGFjDDvCBp@`@tPLjFD`BJhE@VRlJBv@FzBB~A?@NvFFrCTxJJ~EBbADjA@b@DpBHlDBl@DdBFrC@Z@l@L~EBhAXbLFtCFnC@jCAdBA|AGbCMnCEd@Ep@MxAWlCUhBUvAMr@WrA[rA_@vAm@rBc@vAa@lA_@jAgAbD_ClHgAfD{AtE{@jCsD`LeIvVc@rASl@qAxDwRnl@iI`W_Nza@Sl@}@lCqHnU{BzGqG|RgBvF{@~Cs@pCc@|BSdAUnAStAaDjTCRm@|DKt@sEzZiVjaBw@nF[lBSpAg@xDc@xDo@vHYvEOrCO|DMjGClBAfBAbDBjL@|H?v@BfK@jHDx]BtE?dHD|XBjBBvADlBL~CFdBh@zJRtDdAbSlA~Tl@~Kd@tI\\`G\\dHBZZ~Ft@zNf@nJV~Ef@nJFdARpD\\tGNnC^dH`@`If@lJRnDDt@XpF`@`I\\vGV`ELfC^jHVfFZpFf@pJZlGDt@H|A~@vPt@nNJnBDt@ZvFRrDv@jO^`H@^f@fJf@bJ@N`@xHTxD`@`IBj@TfEPpDNpCDdA@^?X@`@?d@@n@?b@?p@?hQ?jE?rL?xL?rD?dPAjO?bB@nH?vA?v@?b@A`G?`B@n^?`B?bG@lCAtN?bE?jJ?~L?pC?b@?jG?nB?bB@d@?bA?d@@b@@hABbABt@FxBHdBHdBHhAFfAJdAHbAHv@RdBNvAPvALx@bAvGHb@hAdHrAvIh@dD|@xF`@hCj@pDJr@p@dEx@jFZrBh@fDv@~Et@xEz@tFLr@XfBnAdIVdBZnBp@fEZpBDV^`Cv@xE`@nCz@hF|@zFZ|BTnBPdBHnADt@D~@@JBv@?BBzA?hEIvCCh@Ch@Ev@KlAO`BM`A]zB[zAKh@Mj@W~@Qp@i@fB[x@i@nASb@a@x@U`@[j@_@l@ILQTi@r@OTY\\MNONeBpBON[^wA~A[\\aAhAkAtAEFiCtCkCvCwAzA_BdBs@v@u@t@g@h@{B`CON]^STs@v@e@n@e@l@CD_@h@k@z@g@x@k@~@GFS\\U`@w@lA[d@}@vAQXyDbGeA`B}AbCqArBo@bAiAbB]h@gDbFo@bA[b@kAdB{@rAy@pAuArBOVSVsB~CkAfBkAdBaBdC]h@[d@mBzCU^{@vA{@pAqAtBsBdDk@|@INgAfBiBvCYd@gAfBsArBa@n@uAvBwAvBuBdDy@pAq@bAy@pAoAnB_D~Ee@t@mEtGORuBbDaBdCINi@|@k@fA}@nBUh@Q`@uAfDaAdD]tAi@nB_@jBABQz@]bBkA|FOp@Or@UbAUdAAJCJSbAU`A}@hEaDhOeDrOMn@y@jEI`@g@dCSrAKr@_@jC]pCq@nGy@zNOhCGz@Ed@KhAW`COpAKt@Kr@AFUzA]hBS~@Q~@Md@UbAc@zAOh@Ob@_@pA]dAUp@Sf@MZGNi@lACFyIzPyA|CqBnFw@zBaAvCm@`Cq@xCcB`Hi@~B{@zDWfAiBdIg@hBYfAw@tCo@zBq@pBoAhDcBdE_BdDs@vAyBtD]l@q@fAgB`Cs@~@a@d@c@l@oArAwB|Bq@t@g@f@{@|@wA|AyAzA{@~@]\\s@t@GFwA~A]^wB|ByA|Aa@b@sAxAg@h@GFyDfEcElEeGfGyBxBqAxAc@f@o@r@oBvBMNeDlDWXSRk@l@{A`BuCzCa@b@u@x@{@|@WXED]^yA|AuA|AKJuB|BoEtEwA|A{BhCqAxAeBrBcBrBkAtAg@j@iDxDGFoApAABmAnAgAlAuBxBs@t@e@f@YZcAbAYZwBzB[^e@d@UV]^]^sCzC]^]^qE~EcBdBa@`@SRKJa@f@_@f@GJY`@Ub@[r@sAxCIRGLYn@c@fAk@pA]x@}AlD[t@[t@yC~GuA`DCHeA`CiBhEGLmDhIu@fBgAdCSd@oBrEwAdDsBxEUh@uDvIWl@sBzE_AxBm@tASd@g@jAe@dA]x@k@jAe@z@a@n@e@p@g@l@g@f@g@f@i@`@YTEDYPKFWLWLe@TC@a@Lq@Ts@N]DGB_BLcCPWBcCLaADq@Do@DgBJk@BeAFE@O@S@C@WBUBWBUDWDWDg@L_@LWHc@P]PSJQHGDUNi@\\]Xa@ZSRA@QPSTQRSTQVSXa@j@QVe@z@]t@Uh@O\\Wn@IVQb@m@dBiAdDuA`EUn@}@jC{@dCELoApDIP{AlEWt@g@pAO`@}AjEYv@[|@mB`GqAxDiAdDmAjDy@`CuA`Ee@pAw@~BYv@a@lAA@qBpF{ApEa@nAuA`Ee@tA_@bAWv@qC~HSl@iBhF[`AUl@Wx@q@jBYz@CH]~@mErMy@|BYx@y@`CkBpFg@xAyB|GCHkAlDyAtE_AvCCFiAjDo@pB}BvHwBvGcBfFQh@gAfD]dAUv@{ArEyApEu@`CITu@|B[~@[z@[x@]|@a@dAy@nB]|@eAdC_@|@o@|A_@|@]z@]z@o@bBYr@M`@c@nAm@lBOd@e@xAA@i@dB_@hAq@pBi@dBiAjDiDnKgGjRqD|K}CrJSn@{@nCQh@mFlPwBzGSl@oAzDoAzDyDnLY|@kApDq@tBSn@CFgC|HCJkAnDQl@y@fCgDhKoDzKyDtLcCtHu@|BqA`ESl@]dAsBlGqBjGs@xB_BdFe@rAmAvDa@nAc@vASj@aAzCaAzC_FjOsAfEwFbQqCtISl@kB~F_Mz_@sC|IoB`Ge@|AkCdIwBxGIVcA`DqA|Do@pBcBjFcI|Va@hAg@zAqAvDmJ`YeBfFsRtk@gCrHgAbDwDbLSn@i@zA{@hCmJ`Y_KpZeIbVyNfc@iCvHeBjF}GfScBfFSl@qAxDsFjPeBfFwBtGUl@aSxl@a@lAoB`G_AnCSn@Sl@yBtGsBdG}DnL{@jCeBdFi@~AoGjR{ArEyBtGaAvCM`@mDnKM`@_CzHu@jCSt@Qp@i@tB}@rDu@lDc@jBMl@o@xCo@~CaBvH{AdHc@pBeFhV]bBq@~CyEbUyCpN{BtKcCjLgBhIOv@c@tBYtAKf@m@|C{BpLMp@UjAq@tDMr@Oz@g@rCi@~CcA`Gg@vCO|@s@dEmHtb@wAjIMr@iFpZW~Am@fDm@jDkEjWu@nE{BrMeFrZgKrm@O`Am@nDo@tD{@bFiDbSeCxNGd@cDdRiAxG[fBuCvP_FxYuBzLc@fCm@tDo@nDgFrZMr@AFsCzPyChQc@hCaDdR]pBcAbGi@|Cu@jEMr@e@lC[dBk@zCe@~Bq@fDQ|@}@rEm@zCOp@e@`CsB~Jy@fEgDrPoBtJaCxLENqCjN{AvH}@jEe@~B_D~OwBlKSfA{@hEeAfFwLdm@Mp@kA~FQz@uBnK{@jEOp@CP_EbS{@jEGXGXiBbJy@|DkL`l@mEtTiAzF{@jEiAxFyBvKmAbGMr@{ChOuAdHkA`Ga@pBm@hDoBnKg@tCoB~JeDvP]~Aa@nBg@fCq@hDyChOiCpMsEhUS`AmBnJo@bD}@fE[zAOj@aCtJ{AnFaD~JwCdJaArCcCzHSl@kBvFaAvCw@dCo@nBENSl@[bAq@nBc@tAuAhEy@fCs@xBSl@Of@cCpHkAlDw@dC}E`OSl@cCvHg@xAGPkAfDqAfDqAdDmBhE_BpDsCzF{D`IMTwJ`SWh@aEjIS^CFqCxF{HzOkGfMgAzBaBdDgAzBsIbQkGhMqAhCy@bBkRf`@{[hp@aEjIWf@iGhMgInPgAzBwEpJg@bAGLWh@gThc@{EtJoCxFsF|KgA|ByBlEgA|BqCvFWh@S`@uC~FWh@sIdQ{HzOqAhCk@nAkJlRiDbHaXxi@yHzOWh@cC`FaPb\\eAxBk@jAeQb^sF~KsOr[sIdQ{HzOWh@aGxLiJnR}@fBS`@Ub@c@~@gTjc@oYnl@Wh@iGhMqCxFWh@aBdDgA|BgAzBaBdDWh@iDdHwBhEsApCyEtJiDbHiD`HqF~Kkf@rbAaBfDaMdWcApBw@`BaBfDgAzBWh@}NhZWh@gA|Bo@pAaBdDWh@gA|ByBnEWh@qCxFgAzBo@rAiGhMaElIaBdDiGhM_DrGkCpFe@|@_AnB}BvEwHtO{KfUaHnNgA|BkMvWq@pAg@dAeA~BsGvM_BdDWh@cHtNaAnBg@fAeD~GwFdLwEtJUb@yKdUc@|@e@|@aElI}GhN]p@oDnHaDvGaPb\\eEvIiDbHo@pAaKzS_CzEyBtEsIfQ{KbUyEvJWh@cN`YyBnECFmBzD{BtEeBnDiDbHiDbHWh@oCzFcC~Ee@bAiGhM}Qp_@Wh@cHtN_F`KgAxBiBtDuLvVaHrNo@rAyNhZuR`a@sIhQWh@aKzSWh@IPcVzf@o@rA{KdUqIhQgA|BWf@MV}L`WWh@mShb@S^k@nA{Ulf@w^xu@sAtC_CzEaHtNyH~Oo@rAWh@qF`LgA|ByBnEwBpEsOv[aAnBkE`J_OvZsBfEWh@gKfT}MzX{Vjh@aAnBk]ts@aCbFyAxCwAvCqAhCme@taAki@phA_C|E}AbDeQn^Wh@{BxEeDdHi@pAQ`@y@xBkAdDk@lB{@~CaAlDw@fDuA~FsCrLeBlHkDhOYlA]tAc@jBK`@{@rDqEhR{FjVI\\kB~Hq@tCuB|Ig@tBaE`QgCrK_AzDwBfJq@pCsAxF{BjJ{FdVQp@iDpNwC~LaA~D[pAqJha@mHb[]xAiAvEoArFkK|c@sAxFaCbKe@nBiF|TeNjl@yAhGkFbUuB|IOr@m@hCm@tCoJbc@oCfMaGhXOp@wBxJwB|Je@rBa@lB_AfEuHr]aE~QeAzE{FvW_BtHoC`M_DxNqB`JaSh~@oBbJs@`DsBlJoH`]cFjUmC`MOp@_DxNyDfQWhAcFvUs@|Cm@fC_@vAQl@_@rAm@lBc@xAc@nA[z@y@xB_@`Ai@lAi@lAsAzCwFlMUj@sFdMy@jBsBvEeA`CeO`]_AxBoArC_ArB}@tBi@lA_BpD}FtM{JdUqHzPo@xAWh@{AlDWj@oEbKWj@yDxIaDlHsBxE{IfSkK|UqRnc@Wj@Uh@k@nAiC`GmDbI_@z@mIhRuEpKuOd^cA`CiMvYuFbMmBfEm@zAeFnLkCbGoEdKQ^KTcKrUUj@qJpTeDnHoEdKoM`ZUh@eA`CWj@oEdKWj@Uh@}AlDUj@cBvDaIvQa@`Aa@`AuBvEoGvN{AlDuA`DgAbCUh@mHrPaCrFaCrFKToBrEsBvEWj@sBvEmHpPgHfPkKbVWj@eFpLkCbG_CnFaDnH_BtDS`@qG~NiDzH}E`L}L~XcI|Qw@jB{AnDeBtD_@t@Wh@ABy@zAoA~BqCbFeAjB_AbB_BxCiAbC{@lBOZGNq@|A_AvBa@`AeCvFcBzD}AlDu@dB{AlDe@dAc@fA]~@GNM\\[z@k@dBKT_AtCaBvEUr@mAlDcApC{@vBw@hBk@rAcDnH_DnHWj@Uh@A?Uj@}D~I{FvMoCnGuCvGaBxD}AjDiHnPc@bAsCrGYn@aEjJsCrGuDvIw@dBs@`B_DjHaAxB{@rBsB~EEJ_@dA]bAOh@ADk@lB]tAOl@Qt@Mh@[xASjAQfAW|AS~AUjBGl@m@tFc@dEg@vEi@dF}@~H?DIt@OlAWhCSfBc@dEy@vHo@zF]fDUrBg@pEGh@c@`Ea@|Dm@xFiBnPy@|HWfC{@dIQ|Ak@fFIt@[zC}AzNiA`KuAlMKbAs@vG}@lIQbB_@dD_ArIo@bGmAjLgAxJ_@nDsBfRE^_@fDALmBfQyGtn@gAzJwCnXq@pGkAtKoB~Q}@hI}@rICRg@vEcCdUoAlLUzBmA~KGl@gBjP{@xHIv@AHeC|Ua@tD[nCMpAq@tGs@|GSdBOtAQpAMr@QdASbAe@xBg@zBsAbGWlASx@{AhHwArGaAhEu@`Dw@nDeCdL[tAeB`IS~@o@xCyEdTS|@Qr@kAnF}BlKwApGq@vCaDvNo@xCg@|Bw@nDoA`Gm@jCkBnI{@tDoAxFQx@_AlE_AfEm@nCeB|H_ClKg@xBuAnGs@bD_@dBeEpRoBxImArFGTG\\}AbHcBzH_BnHm@lCc@nBI^k@lCg@zBcDvNiAnFw@lD[rAYvAq@`DCJc@lBs@bDeArE}BpK]|A_@bBaAlEOp@ABu@nDGVOp@S`AcBrHYpA}BfKABu@lDq@bD]|A}@zDyB`Ke@xBiAfFkAjFgDjOqErSOr@_BnHyArGu@fD?@oA|FgBdIoA|F_AjEa@hBaAlE_@zAS|@y@vC]pAQn@qBlHeAxDaGhTe@fBELkAdEIX{@|CmBbHe@`BoFxRgBtG}@~CyFpSwBzHoC|JaCvIe@dBc@~A}AtFu@lCqCxJOj@aAtDM`@iAbE}BjIaB|FeElOgA~DoBfHSn@oAvEiDxLmGjUyE~P{F|S}@~CQn@iA`Ew@pCwB~Hm@vB{I~[Qp@Oj@}AvFsCdKaCtIiEvOQp@e@`B_CrIQp@eDtLY`ACJgAxD?@{@|CuAfFkBxGoBhH[hA_AdDIZe@fBy@vC{@zCo@~B{AnFOn@sAzEyAlFq@`Cq@bCy@xCe@dBSp@_@rAiAdEyAnFi@nBOj@Ut@c@~Ai@lBq@bC?BSn@Md@o@zBK^e@fBOj@y@vCa@zAa@tA_B~FYdAy@vCYdAe@dB}C|KaAnDaAnDCHw@pCMd@CHw@pCQp@Qp@K^y@vCg@lBMh@Sv@K^e@pBWhAa@pBW|AUzAKn@OhAW|BQbBKpAGv@?@MxBIdBCt@Cl@AHA`@Ar@CjACpAAzAA~C?vD?dA?fJ?X?bJAdI?nA?lP?|C?hD?|K?f@?lY?~@?lI?pL?|F?V?v@?nB?jD?`O?`BAlDAxB?DCr@Ar@Cv@EdACdAGhAIjAIfAGt@El@MrAS`BSbBOhASjAQbAUlACJKf@AH[vAOl@U~@Ux@Ut@Wz@Yz@Wt@Ob@a@fAUj@Sf@MXCFk@lAeBjD_B|CmA`CuDhH}AzCwCzFa@t@ILcApBoAdCyBfEyC~FqDbHqDdHa@v@Wh@aDjGsFnKaAnBiF~JS`@[l@Ud@m@fAu@zAgLxTq@pAiHjNqInPqExIMViAzBgBhD_HxMqAfCqGbM]p@cApByFxKWh@cBbDWf@{AtCa@v@Wh@q@nAwApCwApCcAnBaAjBk@`AU`@CBW`@m@~@c@l@Yb@[d@IHe@l@e@l@s@x@i@j@e@f@[XmBdBsAhAs@f@a@V_@V[RgAn@iAj@{Ar@{@ZkA`@e@NqAb@GByIrCYJE@mA`@kGrB{C`As@TwDpAwAb@cCz@iAd@e@TWLc@RkBfAuBbB]X?@wAvA{C`EcAfBq@nAEFe@dAe@lAaApCm@lBs@rCw@jE_@pC]rC]`EG~@GrAGlBE`CCrBEfN?zAAj^?fB?hA?xAAzDExIi@jMk@jGW`B]bCm@xDOt@Or@a@vB_BnFu@vBWn@kArCyBfEeCdE[b@]`@m@v@eBjBqBnBaEvC}BrAq@`@gB`As@^sAr@oCbBoAv@sD~BuCxAqDrBiBx@_CdAkA^_Bh@mA^eAZc@LGB}B^kEd@kEVsOFyBB]?s@AwBAaC?cm@@gA?wH?uADw@DmAJmAL{Cl@wDrAuCrAkCbByDrCcFrFy@nA{A~B{DrG_NtUyDvGo@dA_BpCW`@_E`HgJzOaDrF}@pBwA~Cq@nB{@`CeAtDy@dDgAjGYnBKt@[bC[tCStBSjDIrCCv@Av@Aj@CdF?bAAbVArPDnm@CdFAbB?pA?dB?tA?nC@fM?~^@`O@hT?tI?jD?v@@|V?rD?n@AfB?HG|E?tI?bVAxP?pR?lKAhk@?~A@rA?nB?R@xDApR?xP?pA?~J?lO?V?`@?fM?r@?B?fO?`C?`@?nC?lQ?xE?`E?~N?b@?TA|N?jD?x@?pE?zL@pUAfB?xP?h@?nL?rJ?P@lE@zCA`A?dE?v@?zF?pE?r@?hIAjD?tI?H?x@?dB?rA@rUA|R?jU?vD?T?nE?xC?|W?bI?tV?v@@~CAfH?D@pM?xC?ne@?fE?bB?lAAlQ?~B?x@A|Q?pT?LA|K?xC?~EAtB?~N?lC?nBApCCfO?v@?pIAtrA?bF?z`@ApF?lEA~^?x@?hT?pBA|G?fMA~o@?dF?DArDAjd@?x@?hS?tFAlE?|G?bF?`FA~`@?fGArF?rF?pB?x@?bV?hD?x@?jd@?bF?hD?x@A~N?x@?dM?`I?jF?pR?hD?jD?bF?bFA`F?|G?pB?bF?tI?bF?v@?pB?pBAjT?rI?bF?dF?bE?x@?hD?pBAldA?bf@?lJ?tJ?fM?bF?v@?lUCnF?HEnB?@IjBSjCC^KjAUpBMfAO~@QdASfAo@lCa@~AYbAWz@g@tAADSf@e@hAi@fAy@xAo@hAmDrFaDbFaF~HwBhDQVeC~D_F|HyDhGu@jA[d@kGzJYd@SZqB~CwEnHYd@qAnBYd@u@jA{DfGu@jAOT{PnX[d@_DdFYd@eC|Du@jAYd@[d@oApBoFvIcDfFoClEoClEkBvCkBvCYd@aDbFy@tAQVGLYd@Yd@[f@s@lAYh@_AbBmAnCCDUl@i@vAg@tAYfAe@jBq@bDk@pDQnAUtBSpCKhBKlC?TCx@Av@AhHAlP?hD@|G?hD?xH?|G?dL?v@?bFAv@?x@?hD?pB?x@?v@?tI?x@?bF?v@?bF?x@?v@?pBAjT?x@?hD?x@?bF?nM?xOArb@?hD?bF?|GArb@?|RAx@?f@?xK?nL?fK?fM?x@?x`@?tIA~g@?rAA~L@dL@vY?v@?dV?v@?xP?x@@zG?fM?~O?nD?vA@zH?nE?pD?lK?ld@?df@?b[?tF?zG?x@?x@?tD@~Y?x@?f]?v@Bhm@?xG?nP"
                     },
                     "start_location" : {
                        "lat" : 50.3968558,
                        "lng" : -105.4085423
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "40.0 km",
                        "value" : 39999
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1516
                     },
                     "end_location" : {
                        "lat" : 50.9073792,
                        "lng" : -113.5367581
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAB-901 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_jmuH~jvpTfAAjACb@AfAAD?|AHf@FB@h@PXLXJFD`@VpArAn@|@|@hB?@jAjCh@jAJXHNdCxFbBvDVh@|AjDzB~EP`@|AjDn@tAjDvHjBhEBFfA~B~AlDVj@Th@Vj@~AhDVj@Rb@Zr@`A`CVj@Tj@xAlDfAbDtA|ENf@@FDLjAbFhAnGXpB@BNhATrBNjALlAJjAPtBFbALfBLjCDjAHvCFvD@lG?~I?v@?p@?|I?v@GzO?~EAxJCfLBtJ@fL@jHAfE?hLA`CFrUAnG@fHAzGBbDBfA?VJ`EJzC\\rFPfChAbPx@pL~@`NRfDvA|STdDBTTbGJlCAbFGlDAVGv@c@dIgAbMGv@eAxLs@jIGt@k@tGIt@q@jIc@|Es@jIc@zE{@bK}@`KC`@WbCKbA[bDIz@gA|HcClQc@`DkB`NWjBuAvJ{@jGsGre@UfBKr@c@`Di@`EmAvHqApGkAtEe@~Aq@tBkAzCgAjCsBfEmCvEwLbS[f@kK`QsEtHyFjJwBnDkAjB}CtFyAlCcCfFg@hAuDxI_@z@Wj@sBxEsAtDa@hAsAdEU|@oCfL_CbJgAxCSl@_@~@}AbDQX{@vAeA~AiC`DoBfByCxByA|@}DrCqCvBuAjAaA`AoAvAcArAw@nAq@fAc@z@[l@s@xA_@|@_@dAy@~Bq@~Bc@lB]`Bg@rCg@bDe@lCMbAm@pDSbAi@nCWjAIXu@rCiBdGgCxGwB|F_BdE}A`E}@`CeAhC_AbC_BlE}AhEi@vAoAfDwCzHCH]`Aw@hCIVqAnE{AdHu@xEIj@Kt@MfAg@fEKnAGx@AJSfDI`BIdBCt@Cr@A|@GjBAzC?|DArO?n[?nK?pB?|G?x`@?x@?pB?zG?bF?|G?x@ApB?hD?|G?td@?pk@?nK?v@?jT?~W?fM?v@?dV?vG?tI?rR?n[?x@?tI?nk@?rRGlU?dD@tBGxO?pC?x@@jT?bF?pB?bF@|G?hD?xP@|G?bF?hD?jD@rb@?nt@@n[?tR?rb@?jD?|W?fM?pB?x@?v@?`O?xP?x@?zTElMEnKAv@AdFAv@E`OCzGApBCbFC|GElKApBC|G?pBElKAx@?~@UlIO`FQxDWlEEl@SdDAJGt@a@rE_ApIQ~Am@jE]`CI`@_AjFk@zCKj@wB~JmClL_B`HaAjECJs@fDeAnF_@bCSrASvAQnAS`B}@bHw@jII~@]hEQlCUvDGjAE~@El@Aj@GzAE|AMxGE|A?RUzKQrICj@IbFIdDKfF?HAl@GrCCnAA|@GpCOjIc@lSgAji@g@pXGdDM`Ge@nUGnDCvAE`CCj@GhDMfDGpAGpAKzB]dFO`C]bE_@zDc@xDCPY|BWfBGb@?Be@~CG^ERe@~Cg@~CKr@e@rC]vCQhAY`BMx@k@fDc@vCQlAc@vCWtB}@rHOjACZAHa@zDSlBk@bGUnC_AfMc@xFSvDGrACf@Ch@Cf@MdDErAKfDErAIhDIlDAjAKlICpBAdC?l@Al@AbF?zB?lU?zJ?h@?nI?pD?`E?pLHdoABdg@IhLGnIOhKa@p]ErDEdKApA?zCErXE~VAfEEvS"
                     },
                     "start_location" : {
                        "lat" : 50.863844,
                        "lng" : -113.0054361
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "25.3 km",
                        "value" : 25340
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 927
                     },
                     "end_location" : {
                        "lat" : 50.907111,
                        "lng" : -113.8955733
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAB-22X W\u003c/b\u003e (signs for \u003cb\u003eCalgary\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAlberta 22X\u003c/b\u003e)",
                     "polyline" : {
                        "points" : "czuuHvc~sT?xV?lX?h]?hI?vDBrb@?~K?`B?tI?tI@pk@@tb@?xP@nK?fHAzF?zA?|FDfGJ`IV|JHxBNjD@RJ~BLlCh@`Jx@vLbBnW?BlAxQb@zG`@fGdE|o@TfDpB|ZDv@TlDNbCRhDFfBBd@@d@?PBzBBpCAjCCrBGdDK|BGvAOzBOtBU~B[hCOlAUtAc@dCg@dCsCdMk@fCQp@q@vCADs@|Ca@lB_@lBg@vCYrBg@xDSdBe@nEUpCWfGK|BGbBGvCC|BChB?zA?hC@tG?zA@hE?bD?d@?fC?dC@`J?jH?tG@zD?pB?bC@hI?vG@`G?rA?v@?bF?pB@h@?N?hD?pB?xD?bB?pB?pB@zA?pD?zGA~LArECrRAzJ?lBAv@Kzy@CjKAtNB~O@hF@bB?jE?v@@rD?rD@xG@|O@fF?tD?^?V?pG@bA?pB?|B@dB?x@?bC?vC?`A?p@?fD@~G?`B?dC?pA?`C?R?`@?xAClCCdC?HGxCGvB?@GbCMrCI`BItBIxAMdBK`BShC]xE[nEW`DANY~D[jEC`@YvDc@bGEv@UzCOvB?BQvCGfACf@K`C?NCf@C~@GjBIhCEfBA`BC|AAnAAnCAfB?lB@hB@vBBxCD`B?NBvAL`EH`CPdEFbARlDR|C?Bb@`G`@rF@JDj@VpD\\tETdDT`Db@dGTrCJzAHlAVnEJxBBh@Bx@JrCFjCJ|EBnDB|C?P@nF?j@?bD?rEA|D?`I?`@?vJ?vC@rO?x@?v@?tE@p_@?lK?rR@b_@?v@?bF?x@@~N?x@?~g@?x@@tT@z`@@p{@Bxp@?rR@v@?h]?x@@pB?v@?bF@ff@@pS?|@?tI?`E?rB@xD?fE?F?rE@hC?|@Ax@?rD?`G?P@~F@zN?lF?zD?`B?rI?dF?~@@rH?hF@tBAlI?z@?hA?vB?l_@?F?nJBlL?HCX?`D?fE?hBB~C?R"
                     },
                     "start_location" : {
                        "lat" : 50.9073792,
                        "lng" : -113.5367581
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.6 km",
                        "value" : 4566
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 173
                     },
                     "end_location" : {
                        "lat" : 50.9031769,
                        "lng" : -113.9592137
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork and merge onto \u003cb\u003eAB-201\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-22X\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "mxuuHhfdvT@fJ@nF@pEDtFBjEFjFBhCDrC@pA@nBAdBAx@CrAGtBOtCGfAKjAKdASnBSdBOnAQ|A]lC[lC]|CS`BAPIv@Iz@Et@En@A\\CZ?@Al@At@?dA@x@?@@dADz@D`AJjALjAFf@?DLx@VtALn@DNPv@J^Pf@@FBHZvAJh@Hb@Jj@DXDZD^D`@Fl@Fr@Dp@Bt@Br@@r@@j@?bAArA?F@HH\\KdJAbA?nAC~DA`BArE?r@?~B@dC?fC@vAB~B@z@@fABjADzAF`CFnBDdADp@JxBX~EP`DTbDLdBj@xHFt@NnBFr@TfCXtC^vDD\\Ht@fA`LjA~LzAnOn@pG@HFl@ZjD^nE|@dL`@xE"
                     },
                     "start_location" : {
                        "lat" : 50.907111,
                        "lng" : -113.8955733
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 288
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 50.9026815,
                        "lng" : -113.9632392
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to continue on \u003cb\u003eAB-201\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-22X W\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "{_uuH`tpvTAz@jAzPXlD"
                     },
                     "start_location" : {
                        "lat" : 50.9031769,
                        "lng" : -113.9592137
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.7 km",
                        "value" : 6716
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 242
                     },
                     "end_location" : {
                        "lat" : 50.9476296,
                        "lng" : -113.9973723
                     },
                     "html_instructions" : "Take exit \u003cb\u003e101B\u003c/b\u003e to merge onto \u003cb\u003eDeerfoot Trail\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-2 N\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "w|tuHfmqvTCd@?DJtBXrFDj@NrCFbAHhAJrAH|@Fp@Df@B\\@DDh@HdADv@@`@@f@?~@?n@A\\Ch@Ad@ATCTCZCTEb@EZGXEVIb@Kb@U|@Ur@c@dAWj@_@l@k@v@u@v@a@\\eAj@_@Py@VeARaFj@[PqBNK@oCJC@_@ZyBEkNBiCAiA@}PBcI@qL?sG@A?gG@g@?sB?cHDoP?qC?aA?iC?yFBiC@mD?_E@aC?a@?yF@eF?sA?u@?}D@cADc@@eAFq@Fu@HcANo@LcARo@P}@Zm@T_@PsAj@EB_Ad@i@\\]Ty@j@[XYTa@^y@v@MJs@r@qAxAu@`Ao@z@u@fAA@KRiAnBYj@QZS`@Ud@Uf@c@`Aa@fAq@jB_@dAUv@u@jCSv@YnAi@dCe@jCYdBUjBM`Aa@tEAFEv@MbBEbAKnBA\\QbEADQ`EKnCc@xJW`FGhAO~BMlB"
                     },
                     "start_location" : {
                        "lat" : 50.9026815,
                        "lng" : -113.9632392
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3288
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 119
                     },
                     "end_location" : {
                        "lat" : 50.9634051,
                        "lng" : -114.0314876
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eAB-2 N\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "uu}uHpbxvTMbBSrCIz@Gt@E`@[xCUlBCX[~B[`CWdBUzA]tBm@hDo@vD}@fFq@|Dy@zEo@rDu@jEc@jCgAjGAHo@|Dc@jDg@`EYtCQfCIpAIjAIzAMnB[rEQxCO~BItAKvAEl@I|@Ip@Kx@Mz@O`AO`AS|@Kf@Sz@Oh@a@tASn@_@dAKRO^O\\EJy@xAo@dAo@~@k@r@q@t@GFq@n@i@b@OLgAt@MFo@\\_@Ra@Pe@PKDSF_@Lc@JyA\\}@RI@}A\\aB^yAXsAT_B^]HsDv@wAZcAR_Dv@"
                     },
                     "start_location" : {
                        "lat" : 50.9476296,
                        "lng" : -113.9973723
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "10.6 km",
                        "value" : 10644
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 384
                     },
                     "end_location" : {
                        "lat" : 51.0435539,
                        "lng" : -114.0089692
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eAB-2 N\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "ix`vHxw~vTwAXmAZq@PiAZIBsAb@e@NqAf@_@P]P]Lm@ZqAp@k@ZmAv@mAz@i@`@g@^_@Xi@b@UToBhBQNIHqArAk@l@w@~@]`@i@l@wCbDmAvAu@x@aAbA_A~@]XQNc@Z[Va@Xi@X_@Rq@\\a@Pa@NIDy@Tm@N_@Hk@JaALk@BcADe@@g@?s@Cc@AA?[Cu@I_AMy@Sy@Uq@Uc@Q_@O}@c@{@e@{@g@cLuHm@a@GCOKSOCCECKGWQoAy@s@e@MIiBaAi@Y}Au@aBo@[M]KaDy@aAQg@Ii@GsAOsAKwCCwE?{A?_@?}GBcE@e@Cm@A_AAw@C_@As@Ek@GQAm@G_AMo@I_AQk@Ok@MsA_@m@Su@Wm@Uk@Uy@_@i@Wi@[sEoCi@]e@[m@_@e@Yg@[g@[m@a@m@]e@[i@]g@[w@e@k@]e@]m@_@g@[m@_@m@_@OIa@Ym@_@s@c@i@]w@g@IEuA}@u@e@i@]CCa@UOKi@]}@k@_@YIGSQ[YUUUWGE]c@g@u@Ya@Wi@Yi@Sc@Oc@O_@CIOe@Qk@Mk@Qu@AEMq@Ko@Ik@Iu@Kw@AQGm@EcACw@CeAAyA@_ABkAHqBFkANuCD{@HeBBq@?CB}@@w@?u@A{AAcAIsAGkAMmAMgAQsAO}@UkA_@iBS_AU{@YgAUw@y@aC]}@_@aA]w@o@yAg@cA[q@s@qAw@sAuAuBQUgAwAy@cAgAkAWU_A}@o@i@eA{@_Ao@MKo@_@g@[u@a@iAi@qAk@i@UiCcAMECAk@WyB{@eIaDkCeAw@[{B{@sBw@w@]}Am@]Qc@S{D{Ac@O]MWMcE_Bc@OgFsBaCaAuBy@yF{Bk@Um@Sc@Og@Oa@Kc@KYG]Go@Ko@G_@AKAS?]?]?_@@_@B_@DOBMBQBOBMDOD]H]LWJUHQHk@\\[POJMHOJYTONWVs@t@s@|@o@`Am@fAg@hAe@hASl@Ul@Sn@K\\gAjDc@rA_@lASf@Sd@MVSd@S^QZS^U^SXc@l@m@p@c@`@k@b@[RUL]Ni@TOFYJgBn@cA^}@\\_Bl@cBl@iA`@w@Xg@R]Nk@X]P[PYRi@`@URQNSP[^Y\\ONMPSZGJ"
                     },
                     "start_location" : {
                        "lat" : 50.9634051,
                        "lng" : -114.0314876
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 241
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 51.044988,
                        "lng" : -114.0114365
                     },
                     "html_instructions" : "Take exit \u003cb\u003e256\u003c/b\u003e for \u003cb\u003eMemorial Dr\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "empvH`kzvTQ@E?A?A?A@GJGHUZS^Q\\S^KPUf@Sf@Qb@KVGR_@hAe@|A"
                     },
                     "start_location" : {
                        "lat" : 51.0435539,
                        "lng" : -114.0089692
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2825
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 177
                     },
                     "end_location" : {
                        "lat" : 51.0498073,
                        "lng" : -114.0471329
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003eMemorial Drive W\u003c/b\u003e and merge onto \u003cb\u003eMemorial Dr\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "evpvHnzzvTaBlFQj@Oh@Qh@MZKVKVIPKPMPKLMLKJMJOJWNC@SHUHYHgAZ]J_@LWJSLSJED_Ax@ONUXW^Yd@OXCFGNGPENENENGXCPERKn@CXCX?V?P?X?R@V@`@?JHhAFj@Dj@Lx@FZH^FVHb@`@~A`@`Bj@bCZvATjANz@@@Fd@NtAJdAN~ABh@Bf@Bv@Bx@B|A@vAAfA?H?p@Ah@ExACrAEvAKtB[nEUdDM|DCfAAjADvGFxG?t@?p@Al@Ab@Ep@IlAGd@Gd@Mp@a@dBUr@c@rASn@Sr@Sx@U`ASpBKbAKrAQxCAp@An@?r@?j@@f@@`A?R?F@n@@~@?@?v@?J?^A`A?DAj@?L?DAp@E^AZE^KfAIh@Ij@Y|AKh@"
                     },
                     "start_location" : {
                        "lat" : 51.044988,
                        "lng" : -114.0114365
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 758
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 51.0491472,
                        "lng" : -114.0559083
                     },
                     "html_instructions" : "Take the \u003cb\u003e4 Ave S\u003c/b\u003e ramp to \u003cb\u003eCity Centre\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "itqvHpyawTIPENCHI\\Wx@Ob@EJa@`A_@|@aAzBUn@AFMh@Mn@Gd@AL?FAX?Z?f@@J@T?FBZ@@BRD\\FVDN@DDH@HJNDJTb@DDLPDFLNJJHJXXDB^Z?@b@`@TV@@FJBBLP@BBFFHBFBD@DBDLZLZHXFVBFH^DRBXBP?@@R@R?N?N?tAAZA|@?DD^"
                     },
                     "start_location" : {
                        "lat" : 51.0498073,
                        "lng" : -114.0471329
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1236
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 150
                     },
                     "end_location" : {
                        "lat" : 51.0496518,
                        "lng" : -114.0735756
                     },
                     "html_instructions" : "Merge onto \u003cb\u003e4 Ave SE W\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "epqvHlpcwTCjDCxEInJAzBKhJCbC?~@CzDGnFClCG~IQ|MG`HG|FEtC"
                     },
                     "start_location" : {
                        "lat" : 51.0491472,
                        "lng" : -114.0559083
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 479
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 127
                     },
                     "end_location" : {
                        "lat" : 51.0453477,
                        "lng" : -114.0739125
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e5 St SW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "isqvHz~fwTxAHdAF`@B`@?v@Bv@@b@@T@Z@X@RB|ADD?F?H@dADz@Bb@BfBB"
                     },
                     "start_location" : {
                        "lat" : 51.0496518,
                        "lng" : -114.0735756
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "47 m",
                        "value" : 47
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 51.04493590000001,
                        "lng" : -114.0738724
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003e5 St SW\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "mxpvH|`gwTPK~@B"
                     },
                     "start_location" : {
                        "lat" : 51.0453477,
                        "lng" : -114.0739125
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 140
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 51.0448403,
                        "lng" : -114.0718702
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003e9 Ave SW\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{upvHt`gwTN}HBqA"
                     },
                     "start_location" : {
                        "lat" : 51.04493590000001,
                        "lng" : -114.0738724
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "omvmGrar_NujCx_GahMxxEm}EzgIpxCzyPtoCdiQ`BxqMysZfyM}oBdr[ug@lmQ_bF`dSweMtgVopOtnIy_O~`Da_ThqEwdOpPijXdwDc`OvjF}iMv}]u`f@~xw@_bLpmPcrStfOmtKxqJuuTjuFmkR~JuiO`eOuu_@nq\\goQtKooN`mP~w@tis@zmJr{p@ltLp~t@j_BtvZrpFx`TbvG~oiAcpBpdc@huBtcxA{sFbc\\itKfxp@dxDrrQs~B|hY{}@t`[_lFxhWgThhc@asV_LeoGahBihCtqH}hExcU~|ExfLvmApdPfzXjoIreEzhwBhaGtvd@ae@hr|@iwErd`BgQ~yvAwoDlzQwh@d|RrvH|rJ`BvnQyhCpd\\rk@hmf@mjFlyHgaL~~JqgHxmy@tr@dsq@w}Ghrp@ajEfj_@ow@f_YdhApiPn|Jffq@xtBzc]~gAvzXoyClrKgmElgBqH|sWqgJnb{@d_Hfjr@duKde^~oBpw]erLr{qAwuJ`wOceB|}RrpCrja@|{F`wTnwAx}_@qbF~nl@jiAfmS_qEbr\\ynAjg[saIpvZueQvgUbcAliLmhLnwe@{iGzbWmh@nmp@uBdlPmxH~uJo}OdwXyrRlsb@ie[|d|@ogShmx@xs@dnj@a|Bxqk@s~DpehAy`Bpx[elO`yXokElgM{Y`dR{r@r`x@{J|`i@ouJrzb@mm[rtrAgkCfabAavC|dJapCfac@auQdr]wgF|oKfVncx@acBnvdAm}In}u@g{D|mvAazAhds@kcFdc^ej`@vdcA}cIx|mAc|G~r}AhUlrdAcac@hxm@}oFhuQa@vjKxApwr@{@hxe@euEtfCyx@d~Ic@hnPIx~Km_Fp_@m{LtJglF||DBt}P_@d_k@MbhYeFvzOsgGbm@qhA|j[qtMzc@w@hpT?z|OB`iP{dHpzAadIeNmc@z|B}mIr~a@aoNn|Qk@z}KmxCdgC}`CdxV{hW~qe@_fr@hbqAgmwAd_oDs|Szch@gfc@xtmAcfPt`k@`J~pMcyDfqXk}H|mo@dwAjbw@gWrjkAvG|~~@d_IvqOnL~qV{t@r_]n|Dfd[vqIto}@rrG|jh@jcPlfv@`eHriRnjJtsg@v|Fr~jA|~Kn~mAzgDt{oA~sC|w|AisE`qdA_`FptZqvL~oRygVbd_Amwf@ppjA}`h@xcvA}n\\f}xAw_KrbKsl@`wa@_vDtgfA`eAbrTa{FnnVk`ArvjAmXxqr@tW`{LkiGl|ComCxvHg_F_`@ycDadE{iBhlBlRrbJ"
         },
         "summary" : "US-2 W",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```

