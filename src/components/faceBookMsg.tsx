"use client"
import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

function FaceBookMsg() {
    return <FacebookProvider appId="371945669163262" chatSupport>
        <CustomChat pageId="288387651020716" minimized={true} />
    </FacebookProvider>
}

export default FaceBookMsg;



