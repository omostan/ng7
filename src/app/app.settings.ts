//#region Copyright

/*****************************************************************************************
*                                     ______________________________________________     *
*                              o O   |                                              |    *
*                     (((((  o      <                     LicDB                     |    *
*                    ( o o )         |______________________________________________|    *
* ------------oOOO-----(_)-----OOOo----------------------- http://10.2.169.55:84 ------- *
*                Name: app.settings.ts                                                   *
*              Author: Stanley Omoregie                                                  *
*     Completion date: 06.09.2016                                                        *
*       Modified date: 28.10.2017                                                        *
*  Last Modified date: 07.07.2018                                                        *
*           CopyRight: @2016 Novomatic Gaming Industries GmbH                            *
*                  .oooO  Oooo.                                                          *
*                  (   )  (   )                                                          *
* ------------------\ (----) /---------------------------------------------------------- *
*                    \_)  (_/                                                            *
*****************************************************************************************/

//#endregion Copyright

/*global app*/
/*jshint -W030*/


/** END **/

    export const AppInfo = {
        Project    : 'LicDB',
        Title      : 'Welcome to Novomatic License Database',
        Author     : 'Ing. Stanley Omoregie',
        Company    : 'Novomatic Gaming Industries',
        Department : 'CMS / IT-AM',
        Version    : 'v1.0.0.93', // change the version number as required!
        Copyright  : 'Copyright Ⓒ 2015 Novomatic AG. All Rights Reserved',
        WebServer  : '(Test)',
        FontSize   : '0.5em',
        FontColor  : 'darkorange'
    }
    
/** START - DO NOT CHANGE ANY OF THESE SETTINGS BELOW, EXCEPT YOU KNOW WHAT YOU ARE DOING !!! **/
    
    //#region Note on JSON-Server 

    /** This method sets the url to get fake data for testing.
         *  Ref: https://reqres.in/api/
         *  A hosted REST-API ready to respond to AJAX requests.
         *  It is used to test front-end against a real API.
         *  GET, POST, PUT & DELETE are supported.
         * 
         *  /////////////////////////////////////////
         *  /            JSON-Server                /
         *  /////////////////////////////////////////
         *  I have decided to use my own local json-server
         *  To do this, run the following commands
         * 
         *  1.) 'npm install -g json-server'
         *  2.) create a json file (e.g. 'assets/data/fakeDB.json' file structure) with some data in it
         *  3.) start the server with 'json-server --watch fakeDB.json' 
         */

    //#endregion Note on JSON-Server 
    // export const GLOBAL_ServerAddress = { value: 'http://localhost:50850/RESTServices/RESTService.svc/' }
    export const GLOBAL_ServerAddress = { value: 'http://localhost:3000/' }
    export const GLOBAL_ShowDebugButton = { value: true }
    export const GLOBAL_UserName = { value: '' }
    export const GLOBAL_UserPW = { value: '' }
    export const GLOBAL_UserRoles = { value: '' }
    export const GLOBAL_isLoggedIn = { value: false }
    export const GLOBAL_ReferenceDate = { value: new Date(2015, 9, 1, 0, 0, 0)}
    
/** END **/
    