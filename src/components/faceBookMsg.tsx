"use client"
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

function FaceBookMsg() {
    if (typeof window !== 'undefined') {
        return (
            <FacebookProvider appId="371945669163262" chatSupport>
                <CustomChat pageId="288387651020716" minimized={true} />
            </FacebookProvider>
        );
    } else {
        return null;
    }
}

export default FaceBookMsg;
