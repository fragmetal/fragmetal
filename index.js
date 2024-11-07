const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const PORT = 3000;

const myCookies = '_zitok=09f1bdfb7c44bfcecab91730725352; __stripe_mid=db1311b1-b990-4495-af0c-78f03df409df461dc0; _cfuvid=RG_GP1uP4d9rpTR1rzn4X0F1aoEf1dEuqrRfXikE4tI-1730941758731-0.0.1.1-604800000; amplitudeSessionId=1730942436; ld_uid=26315181; __stripe_sid=60435296-87f6-4d9b-9472-78f56e206eddb872c7; gfa_ref=https://replit.com/; gfa_landed_on=/forgot; connect.sid=eyJhbGciOiJSUzI1NiIsImtpZCI6InVzQWVOQSJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9yZXBsaXQtd2ViIiwicm9sZXMiOlsidGVhY2hlcl91bnZlcmlmaWVkIl0sImF1ZCI6InJlcGxpdC13ZWIiLCJhdXRoX3RpbWUiOjE3MzA5NDM0MDksInVzZXJfaWQiOiJld1BWYXlINU1DZ3ZDZWROek5mcWxINVBGMUEzIiwic3ViIjoiZXdQVmF5SDVNQ2d2Q2VkTnpOZnFsSDVQRjFBMyIsImlhdCI6MTczMDk0MzQxMSwiZXhwIjoxNzMxNTQ4MjExLCJlbWFpbCI6ImZyYWdtZXRhbDg4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImZyYWdtZXRhbDg4QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KlvZEDE9TZrZFbQF8Y5hTz5MPpHU7sRPZpIGw41D2mLd8v2ol2dIK4yjMciHCAQqbOHJB-zgXi17SSOTZQV6VmCLEGIFRnb1S1AA8WKrLcQHxW__ATQKKESGEMTb8C4lzi3thp4wq5Y8HTGmAMbYBRErxpjaJDsqnZHrr9Q-24c5m4w8txpi3I6b8P8LRWyQO-ITa4kLDcYqnzVC9pViYMnKCZB-T-Ey0T3wvYvWReNueoIiM5e68eOSe2L0LnI3xZmgzoKU7SsWdE3bl5AB1Tr9As2kYuvE1UcCigjcYxqtVBEVa43D2iprZtLh_KQuwkS3A87lkWk7qpiC2Do_vw; replit_authed=1; __cf_bm=_5uh9iJ1btIiF8suCB2RR_YgvJ4MmSUNumGv6bZS.o0-1730944538-1.0.1.1-3W9UYHVx.SyK.sSCo1fNh5b18X33X3DRXsI7JajuxJzNJJBfFuQ5wmxMn7HCtGSNSkPo0IEwtqV9R_KdR3jxow; _dd_s=';

app.use('/', proxy('https://replit.com/@fragmetal88/RelayJS', {
    proxyReqOptDecorator: (proxyReqOpts) => {
        proxyReqOpts.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
        proxyReqOpts.headers['Cookie'] = myCookies; // Use your extracted cookies
        proxyReqOpts.headers['Host'] = 'replit.com';
        proxyReqOpts.rejectUnauthorized = false;
        return proxyReqOpts;
    },
    userResHeaderDecorator: (headers) => {
        headers['Cache-Control'] = 'public, max-age=3600';
        return headers;
    },
    preserveHostHdr: true
}));

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
