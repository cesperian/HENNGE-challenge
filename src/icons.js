let h = require('virtual-hyperscript-svg');

export const arrow_solid = h(
    'svg',
    {class: 'icon-arrow-solid', viewBox: '0 0 8 5'},
    [
        h(
            'polygon',
            { points: '8 5 3.993 0 0 5 8 5'}
        )
    ]);


export const arrow_thin = h(
    'svg',
    {class: 'icon-arrow-thin', viewBox: '0 0 2.9882 6'},
    [
        h(
            'path',
            {d: 'M2.9882,3.00782a.29009.29009,0,0,1-.07319.19286L.51262,5.90234a.29054.29054,0,0,1-.43456-.38577l2.23114-2.509L.07806.48856A.29045.29045,0,0,1,.50284.09233l.00978.011L2.91512,2.8152A.28942.28942,0,0,1,2.9882,3.00782Z'},
        )
    ]
);

export const calendar = h('svg', {'xmlns':'http://www.w3.org/2000/svg','viewBox':'0 0 19.86244 18'},
    [
        h('path', {'class':'a','d':'M18.77607,1.862H16.75882V3.10342h1.86207v13.6552H1.24154V3.10342H3.10362V1.862H1.08637A1.10484,1.10484,0,0,0,.00016,2.98517V16.87655A1.10484,1.10484,0,0,0,1.08606,18h17.69a1.10483,1.10483,0,0,0,1.08621-1.12314V2.98548A1.10482,1.10482,0,0,0,18.77638,1.862Z'}),
        h('rect', {'class':'a','x':'3.72431','y':'6.82756','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'7.44845','y':'6.82756','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'11.1726','y':'6.82756','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'14.89675','y':'6.82756','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'3.72431','y':'9.93102','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'7.44845','y':'9.93102','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'11.1726','y':'9.93102','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'14.89675','y':'9.93102','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'3.72431','y':'13.03447','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'7.44845','y':'13.03447','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'11.1726','y':'13.03447','width':'1.24138','height':'1.24138'}),
        h('rect', {'class':'a','x':'14.89675','y':'13.03447','width':'1.24138','height':'1.24138'}),
        h('path', {'class':'a','d':'M4.96569,4.3448a.62069.62069,0,0,0,.62069-.62069V.62069a.62069.62069,0,1,0-1.24138,0V3.72411A.62069.62069,0,0,0,4.96569,4.3448Z'}),
        h('path', {'class':'a','d':'M14.89675,4.3448a.62069.62069,0,0,0,.62069-.62069V.62069a.62069.62069,0,1,0-1.24138,0V3.72411A.62069.62069,0,0,0,14.89675,4.3448Z'}),
        h('rect', {'class':'a','x':'6.82776','y':'1.86203','width':'6.20691','height':'1.24138'})
    ]
);

export const paperclip = h('svg', {class: 'icon-paperclip', 'xmlns':'http://www.w3.org/2000/svg','viewBox':'0 0 13.93083 15'},
    [
            h('path', {'class':'a','d':'M6.799,3.6254A2.30522,2.30522,0,1,0,3.56718,6.85622l4.304,4.304a.5222.5222,0,0,0,.7385-.7385l-4.304-4.304c-.53586-.53586-.87743-1.33808-.23084-1.98466.64553-.64659,1.4488-.304,1.98466.23189L11.032,9.3364c1.90632,1.90841,2.38159,2.78793,1.24615,3.92441-1.149,1.148-2.367.86385-4.20121-.96935L2.367,6.57941C1.1741,5.38653.33845,3.43842,1.90633,1.87159c1.86141-1.86141,3.98708-.03134,4.59293.57555l5.11038,5.11142a.5222.5222,0,0,0,.7385-.7385L7.23776,1.70864C5.18625-.34288,2.86-.56223,1.16678,1.13308c-1.711,1.71-1.5261,4.196.4617,6.18484l5.711,5.711C7.96726,13.6567,9.31161,15,10.85756,15a3.01214,3.01214,0,0,0,2.16014-1.00173c2.07554-2.07658.15564-3.99857-1.24616-5.40141Z'})
    ]
);

export const mail_sp = h('svg', {class: 'icon-mail-sp', 'xmlns':'http://www.w3.org/2000/svg','viewBox':'0 0 11.35144 26.35693'},
    [
            h('path', {'class':'a','d':'M0,0V7.20007H11.35144V0ZM9.90466.80005,5.67542,4.34863,1.44617.80005ZM.80005,6.4V1.30225L5.41858,5.17773a.39868.39868,0,0,0,.51367,0l4.61914-3.876V6.4Z'}),
            h('path', {'class':'a','d':'M3.54952,13.76637a.36946.36946,0,0,0,0,.52093l2.13177,2.14285L7.82044,14.291a.36945.36945,0,0,0-.52093-.52093L6.05075,15.01513v-2.7963a.36946.36946,0,0,0-.73892,0v2.80738L4.06307,13.77745A.36946.36946,0,0,0,3.54952,13.76637Z'}),
            h('path', {'class':'a','d':'M5.67566,22.35693a1.5,1.5,0,1,1-1.5,1.5,1.50164,1.50164,0,0,1,1.5-1.5m0-1a2.5,2.5,0,1,0,2.5,2.5,2.5,2.5,0,0,0-2.5-2.5Z'})
    ]
);

export const search = h('svg', {'xmlns':'http://www.w3.org/2000/svg','viewBox':'0 0 17.9803 18'},
    [
            h('path', {'class':'a','d':'M17.81684,17.04048,12.86753,12.064a7.33089,7.33089,0,1,0-.79573.79645L17.018,17.83373a.5629.5629,0,1,0,.79885-.79325ZM7.32474,13.47375a6.16023,6.16023,0,0,1-6.16583-6.1546V7.31352a6.16022,6.16022,0,1,1,6.16583,6.16023Z'})
    ]
);
