'use client'

import useCanvas from "@/components/shared/useCanvas";
import { RefObject } from "react";
import { WaveGroup } from "./roadmap-animation/wavegroup"

type RoadmapAnimationProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const RoadmapAnimation: React.FC<RoadmapAnimationProps> = ({
    canvasWidth, canvasHeight
}) => {

    let orbs: WaveGroup[] = [];
    for(let i = 0; i <= 300; i += 100) {

        orbs.push(new WaveGroup(i, i, 200, 200, 0.8));
    }

    function animate(ctx: CanvasRenderingContext2D) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for(let orb of orbs) {

            orb.draw(ctx);
            let tag: string = "BFS";
            ctx.textAlign = "center";
            ctx.font = "30px normal";
            ctx.strokeText(tag, orb.centerX, orb.centerY);
            // ctx.fillText("test", orb.startX, orb.startY);
        }
    }

    const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight, animate);

    return (
        <canvas ref={canvasRef} />
    );
}

export default RoadmapAnimation;