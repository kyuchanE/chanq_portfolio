'use client';

import { useState } from "react";
import { ContentSection } from "./ContentSection";
import { HierarchySection } from "./toolbar/HierarchySection";
import { LeftToolBarSection } from "./LeftToolBarSection";

export const ProjectMainSection: React.FC = () => {
    const [isVisibleHierarchy, setVisibleHierarchy] = useState(true);

    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden min-h-0">
            {/* Left Tool Bar */}
            <LeftToolBarSection
                className="w-[50px] h-full"
                onVisibleHierarchyClick={() => setVisibleHierarchy((v) => !v)} />
            {/* Hierarchy List */}
            {isVisibleHierarchy &&
                <HierarchySection
                    className="w-[200px]"
                />}
            {/* Contents */}
            <ContentSection className="flex-1 bg-black" />
            {/* PrewView */}
        </div>
    )
}