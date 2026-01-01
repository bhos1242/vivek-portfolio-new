"use client"

import dynamic from "next/dynamic"

const CertificateVault = dynamic(
    () => import("@/components/certificate-vault-section").then((mod) => mod.CertificateVaultSection),
    {
        ssr: false,
        loading: () => (
            <div className="h-[600px] flex items-center justify-center bg-muted/30 rounded-[2.5rem] border border-dashed border-border/50">
                <div className="text-[10px] font-black uppercase tracking-widest animate-pulse text-muted-foreground">
                    Establishing Secure Vault Connection...
                </div>
            </div>
        )
    }
)

export function CertificateVaultWrapper() {
    return <CertificateVault />
}
