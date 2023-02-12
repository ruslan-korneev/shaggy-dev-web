import React from "react";

import StackTech from "./StackTech";
import GithubActivities from "./GithubActivities";

export default function Profile() {
    return (
        <div>
            <p className={"text-center mt-8 text-3xl font-bold text-gray-400"}>
                Ruslan Korneev
            </p>
            <StackTech />
            <GithubActivities />
        </div>
    )
}

