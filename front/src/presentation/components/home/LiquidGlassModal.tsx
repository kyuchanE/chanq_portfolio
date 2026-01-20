'use client';

import Link from "next/link";

type Props = {
    open: boolean;
    onClose?: () => void;
};

export function LiquidGlassModal(
    { open, onClose = () => { } }: Props
) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* 1) Dim Overlay */}
            {/* <button
                aria-label="Close modal"
                onClick={onClose}
                className="absolute inset-0 bg-black/10"
            /> */}

            {/* 2) Center container */}
            <div className="absolute inset-0 grid place-items-center p-6">
                {/* 3) Glass Panel */}
                <div
                    className="relative isolate w-full max-w-[520px] rounded-2xl p-6 bg-white/[0.0005] ring-1 ring-white/25 shadow-2xl backdrop-blur-sm backdrop-saturate-150 overflow-hidden"
                    style={{ filter: "url(#liquid-glass)" }}
                >
                    {/* Specular highlight layer */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,rgba(255,255,255,0.55),transparent_55%)] mix-blend-overlay"
                    />
                    <div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_90%,rgba(255,255,255,0.25),transparent_60%)] mix-blend-soft-light"
                    />

                    {/* Content */}
                    <h2 className="text-xl font-bold text-white">Liquid Glass Popup</h2>
                    <p className="mt-2 text-white/80">
                        배경은 흐려지고, 테두리/반사광/굴절이 합쳐져 유리처럼 보입니다.
                    </p>

                    <div className="mt-6 flex justify-end gap-2">
                        <button
                            onClick={() => { }}
                            className="rounded-lg bg-white/15 px-4 py-2 text-white ring-1 ring-white/20 hover:bg-white/20"
                        >
                            닫기
                        </button>
                        <Link
                            href="/project"
                            className="rounded-lg bg-white/80 px-4 py-2 text-black hover:bg-white">
                            확인
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}