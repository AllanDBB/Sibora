"use client"
import { useMemo, useState } from 'react'

type Tx = { id: string; type: 'buy' | 'redeem'; amount: number; counterparty: string; ts: string; hash?: string }

export default function DashboardMock() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [company, setCompany] = useState('Acme S.A.')
  const [balance, setBalance] = useState(1200) // eco‑tokens (ECT)
  const [buyAmount, setBuyAmount] = useState(250)
  const [unit, setUnit] = useState<'ECT' | 'TON' | 'M2'>('ECT')
  const [currency, setCurrency] = useState<'USD' | 'CRC'>('USD')
  const [obligationECT] = useState(2000) // obligación a compensar (mock)
  const [txs, setTxs] = useState<Tx[]>([
    { id: 'tx_001', type: 'buy', amount: 500, counterparty: 'Marketplace', ts: '2025-09-06 10:12', hash: '0x8f...1a2b' },
    { id: 'tx_002', type: 'redeem', amount: 120, counterparty: 'Proyecto Río Limpio', ts: '2025-09-05 16:30', hash: '0x7c...9d3e' },
  ])

  // Precios y formatos
  const priceUSD = 0.5 // USD por ECT (mock)
  const fxCRC = 520 // 1 USD -> 520 CRC (mock)
  const nf0 = useMemo(() => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }), [])
  const nf1 = useMemo(() => new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }), [])
  const nf2 = useMemo(() => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), [])

  // Conversión desde entrada a ECT
  const ectFromInput = useMemo(() => {
    if (unit === 'ECT') return Math.max(0, buyAmount)
    if (unit === 'TON') return Math.max(0, Math.round(buyAmount * 1000)) // 1 ton ≈ 1000 ECT (mock)
    return Math.max(0, Math.round(buyAmount * 2)) // 1 m² restaurado ≈ 2 ECT (mock)
  }, [buyAmount, unit])

  const costUSD = useMemo(() => ectFromInput * priceUSD, [ectFromInput])
  const cost = currency === 'USD' ? `$${nf2.format(costUSD)}` : `${nf0.format(costUSD * fxCRC)} CRC`

  const pct = Math.min(100, (balance / obligationECT) * 100)
  const pctText = nf1.format(pct)

  // Métricas adicionales (mock)
  const iaRate = 0.92 // 92% de acciones validadas por IA
  const nfcRate = 0.81 // 81% de entregas con NFC
  const activeProjects = 8

  function connectWallet() {
    setConnected(true)
    setAddress('0xA1b3...9F42')
  }
  function disconnect() {
    setConnected(false)
    setAddress(null)
  }
  function buyTokens() {
    if (ectFromInput <= 0) return
    setBalance(prev => prev + ectFromInput)
    setTxs(prev => [
      { id: 'tx_' + (prev.length + 1).toString().padStart(3, '0'), type: 'buy', amount: ectFromInput, counterparty: 'Marketplace', ts: new Date().toLocaleString('en-US'), hash: '0x' + Math.random().toString(16).slice(2, 8) + '...' + Math.random().toString(16).slice(2, 6) },
      ...prev,
    ])
  }

  return (
    <main className="min-h-screen relative py-10 md:py-14">
      <div className="section-ambient section-ambient--subtle" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{company} · Dashboard</h1>
            <p className="text-ink/70 mt-1">Compra eco‑tokens, gestiona tu wallet y visualiza cumplimiento ESG.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="glass px-2.5 py-1 rounded-full">Blockchain audit trail</span>
              <span className="glass px-2.5 py-1 rounded-full">IA: acciones validadas</span>
              <span className="glass px-2.5 py-1 rounded-full">Sello verde corporativo</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {connected ? (
              <>
                <span className="glass px-3 py-1.5 rounded-xl text-sm">{address}</span>
                <button className="btn btn-ghost px-3 py-2" onClick={disconnect}>Desconectar</button>
              </>
            ) : (
              <button className="btn btn-primary px-4 py-2" onClick={connectWallet}>Conectar wallet</button>
            )}
          </div>
        </header>

        {/* KPIs + Cumplimiento */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard label="Balance eco‑tokens" value={nf0.format(balance)} suffix="ECT" />
          <StatCard label="Precio actual" value={`$${nf2.format(priceUSD)}`} suffix="USD" />
          <StatCard label="Impacto estimado" value={nf0.format(balance * 0.8)} suffix="kg reciclados" />
          <StatCard label="Emisiones evitadas" value={nf1.format(balance * 0.12)} suffix="t CO₂e" />
          <div className="card p-5 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full" style={{ background: `conic-gradient(#16a7a3 ${pct}%, #e5f6f7 0)` }} />
            <div>
              <div className="text-sm text-ink/60">Cumplimiento Ley 8839/ESG</div>
              <div className="font-semibold">{pctText}%</div>
              <div className="text-xs text-ink/60">Meta: {nf0.format(obligationECT)} ECT</div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {/* Comprar eco‑tokens */}
          <div className="card p-6 lg:col-span-2">
            <h2 className="font-semibold text-lg">Comprar eco‑tokens</h2>
            <p className="text-sm text-ink/70 mt-1">Precio spot simulado. Esta es una demo sin transacciones reales.</p>
            <div className="mt-4 grid sm:grid-cols-5 gap-4 items-end">
              <div className="sm:col-span-2">
                <label className="block text-sm text-ink/70 mb-1">Cantidad</label>
                <input type="number" value={buyAmount} min={0} onChange={(e) => setBuyAmount(parseInt(e.target.value || '0', 10))} className="w-full rounded-xl border border-black/10 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-ink/70 mb-1">Unidad</label>
                <select value={unit} onChange={(e) => setUnit(e.target.value as any)} className="w-full rounded-xl border border-black/10 px-3 py-2">
                  <option value="ECT">ECT</option>
                  <option value="TON">Toneladas</option>
                  <option value="M2">m²</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-ink/70 mb-1">Moneda</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value as any)} className="w-full rounded-xl border border-black/10 px-3 py-2">
                  <option value="USD">USD</option>
                  <option value="CRC">CRC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-ink/70 mb-1">Costo estimado</label>
                <div className="glass rounded-xl px-3 py-2">{cost}</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-ink/60">Equivale a {nf0.format(ectFromInput)} ECT a ${nf2.format(priceUSD)} c/u</div>
            <div className="mt-4">
              <button className="btn btn-primary px-5 py-2" onClick={buyTokens}>Comprar</button>
            </div>
          </div>

          {/* Estado de cumplimiento / Reporte */}
          <div className="card p-6">
            <h2 className="font-semibold text-lg">Reporte ESG</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink/80">
              <li className="flex items-center justify-between"><span>Toneladas compensadas</span><span className="font-medium">{nf1.format(balance / 1000)} t</span></li>
              <li className="flex items-center justify-between"><span>m² regenerados (estimado)</span><span className="font-medium">{nf0.format(balance / 2)} m²</span></li>
              <li className="flex items-center justify-between"><span>Acciones verificadas</span><span className="font-medium">{Math.max(12, Math.floor(balance / 80))}</span></li>
            </ul>
            <div className="mt-4 flex gap-2">
              <button className="btn btn-ghost px-3 py-2 text-sm">Descargar PDF</button>
              <button className="btn btn-ghost px-3 py-2 text-sm">Descargar Excel</button>
            </div>
          </div>
        </div>

        {/* Transacciones, Impacto y Branding */}
        <div className="mt-6 grid xl:grid-cols-3 gap-6">
          <div className="card p-6 xl:col-span-2 overflow-x-auto">
            <h2 className="font-semibold text-lg">Actividad reciente</h2>
            <table className="mt-3 w-full text-sm">
              <thead className="text-ink/60">
                <tr>
                  <th className="text-left font-medium py-2">ID</th>
                  <th className="text-left font-medium py-2">Tipo</th>
                  <th className="text-left font-medium py-2">Cantidad</th>
                  <th className="text-left font-medium py-2">Contraparte</th>
                  <th className="text-left font-medium py-2">Fecha</th>
                  <th className="text-left font-medium py-2">Blockchain</th>
                </tr>
              </thead>
              <tbody>
                {txs.map(tx => (
                  <tr key={tx.id} className="border-t border-black/5">
                    <td className="py-2">{tx.id}</td>
                    <td className="py-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${tx.type === 'buy' ? 'bg-primary-100 text-primary-700' : 'bg-amber-100 text-amber-700'}`}>{tx.type === 'buy' ? 'Compra' : 'Canje'}</span>
                    </td>
                    <td className="py-2">{nf0.format(tx.amount)} ECT</td>
                    <td className="py-2">{tx.counterparty}</td>
                    <td className="py-2">{tx.ts}</td>
                    <td className="py-2"><a className="underline underline-offset-2 text-ink/70" href="#">{tx.hash ?? '—'}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-6">
            <h2 className="font-semibold text-lg">Impacto</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink/80">
              <li className="flex items-center justify-between"><span>Kg reciclados (estimado)</span><span className="font-medium">{nf0.format(balance * 0.8)} kg</span></li>
              <li className="flex items-center justify-between"><span>CO₂ evitado (estimado)</span><span className="font-medium">{nf1.format(balance * 0.12)} t</span></li>
              <li className="flex items-center justify-between"><span>Entregas verificadas (mock)</span><span className="font-medium">{Math.max(12, Math.floor(balance / 100))}</span></li>
              <li className="flex items-center justify-between"><span>Search parties patrocinadas</span><span className="font-medium">3</span></li>
            </ul>
            <div className="mt-4 text-xs text-ink/60">Datos simulados con fines de demostración.</div>
          </div>
        </div>

        {/* Comparativas por año y tendencias */}
        <YearlyComparisons nf0={nf0} nf1={nf1} />

        {/* Más métricas y visualizaciones */}
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {/* Distribución por material */}
          <div className="card p-6">
            <h2 className="font-semibold text-lg">Distribución por material</h2>
            <div className="grid grid-cols-2 gap-4 items-center mt-3">
              <PieDonut
                data={[
                  { label: 'Plástico', value: 38, color: '#16a7a3' },
                  { label: 'Orgánico', value: 22, color: '#65cdc1' },
                  { label: 'Vidrio', value: 18, color: '#127ead' },
                  { label: 'Papel/Cartón', value: 14, color: '#0ea5e9' },
                  { label: 'E‑waste', value: 8, color: '#22d3ee' },
                ]}
              />
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{background:'#16a7a3'}}/>Plástico · {nf0.format(38)}%</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{background:'#65cdc1'}}/>Orgánico · {nf0.format(22)}%</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{background:'#127ead'}}/>Vidrio · {nf0.format(18)}%</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{background:'#0ea5e9'}}/>Papel/Cartón · {nf0.format(14)}%</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{background:'#22d3ee'}}/>E‑waste · {nf0.format(8)}%</li>
              </ul>
            </div>
            <div className="mt-2 text-xs text-ink/60">Participación por tipo de residuo en los ECT comprados/financiados.</div>
          </div>

          {/* Reputación verde */}
          <div className="card p-6">
            <h2 className="font-semibold text-lg">Reputación verde</h2>
            <Gauge value={84} />
            <ul className="mt-3 text-sm text-ink/80 space-y-1">
              <li>Validación IA: <b>{nf1.format(iaRate * 100)}%</b></li>
              <li>Entregas con NFC: <b>{nf1.format(nfcRate * 100)}%</b></li>
              <li>Proyectos activos: <b>{activeProjects}</b></li>
            </ul>
            <div className="mt-3 flex gap-2">
              <button className="btn btn-ghost px-3 py-2 text-sm">Descargar sello</button>
              <button className="btn btn-ghost px-3 py-2 text-sm">Ver guía de uso</button>
            </div>
          </div>

          {/* ECT por material (mes actual) */}
          <div className="card p-6">
            <h2 className="font-semibold text-lg">ECT por material · mes actual</h2>
            <StackedMonthly
              monthLabels={["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"]}
              stacks={[
                { label: 'Plástico', color: '#16a7a3', values: [30,22,18,26,32,12,10] },
                { label: 'Orgánico', color: '#65cdc1', values: [10,14,12,11,15,6,5] },
                { label: 'Vidrio', color: '#127ead', values: [8,9,7,10,9,4,3] },
              ]}
            />
            <div className="mt-2 text-xs text-ink/60">ECT recolectados por día y categoría (mock).</div>
          </div>
        </div>

        <div className="mt-6 card p-6">
          <h2 className="font-semibold text-lg">Beneficios visibles</h2>
          <div className="mt-2 text-sm text-ink/80">Tu empresa financió la limpieza de <b>5 playas</b> y la recolección de <b>100,000 botellas</b>. Puedes usar el <b>sello verde</b> en tus campañas.</div>
          <div className="mt-3 text-xs text-ink/60">Espacio para logotipo de empresa y módulos públicos (opcional).</div>
        </div>
      </div>
    </main>
  )
}

function StatCard({ label, value, suffix }: { label: string; value: string | number; suffix?: string }) {
  return (
    <div className="card p-5">
      <div className="text-sm text-ink/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">
        {value} {suffix ? <span className="text-base font-normal text-ink/60">{suffix}</span> : null}
      </div>
    </div>
  )
}

function YearlyComparisons({ nf0, nf1 }: { nf0: Intl.NumberFormat; nf1: Intl.NumberFormat }) {
  const years = [2023, 2024, 2025]
  // Datos mock por empresa/año
  const tokensByYear = { 2023: 900, 2024: 1450, 2025: 1200 }
  const co2ByYear = { 2023: 95.3, 2024: 132.5, 2025: 118.4 } // t CO2e
  const actsByYear = { 2023: 420, 2024: 860, 2025: 760 }

  const [selYear, setSelYear] = useState(2025)
  // Tendencia mensual (mock) para el año seleccionado
  const monthlyECT: Record<number, number[]> = {
    2023: [20, 30, 40, 60, 70, 90, 120, 160, 150, 100, 40, 20],
    2024: [40, 60, 80, 100, 140, 180, 220, 230, 190, 110, 60, 30],
    2025: [50, 70, 90, 130, 160, 180, 170, 140, 100, 70, 40, 20],
  }

  const bars = [
    { label: 'ECT comprados', value: tokensByYear[2023], year: 2023 },
    { label: 'ECT comprados', value: tokensByYear[2024], year: 2024 },
    { label: 'ECT comprados', value: tokensByYear[2025], year: 2025 },
  ]

  return (
    <div className="mt-6 grid lg:grid-cols-3 gap-6">
      <div className="card p-6 lg:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Comparativa anual</h2>
        </div>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <BarSimple title="ECT comprados" data={years.map(y => ({ year: y, value: tokensByYear[y as 2023|2024|2025] }))} unit="ECT" nf0={nf0} />
          <BarSimple title="CO₂ evitado" data={years.map(y => ({ year: y, value: co2ByYear[y as 2023|2024|2025] }))} unit="t" nf0={nf1} />
          <BarSimple title="Acciones verificadas" data={years.map(y => ({ year: y, value: actsByYear[y as 2023|2024|2025] }))} unit="" nf0={nf0} />
        </div>
      </div>
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Tendencia mensual</h2>
          <select value={selYear} onChange={(e) => setSelYear(parseInt(e.target.value, 10))} className="rounded-xl border border-black/10 px-2 py-1 text-sm">
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <LineMini points={monthlyECT[selYear]} />
        <div className="mt-2 text-xs text-ink/60">ECT por mes · {selYear}</div>
      </div>
    </div>
  )
}

function BarSimple({ title, data, unit, nf0 }: { title: string; data: { year: number; value: number }[]; unit: string; nf0: Intl.NumberFormat }) {
  const max = Math.max(...data.map(d => d.value)) || 1
  return (
    <div>
      <div className="text-sm text-ink/60">{title}</div>
      <ul className="mt-2 space-y-2">
        {data.map(d => (
          <li key={d.year} className="flex items-center gap-2">
            <span className="w-10 text-xs text-ink/60">{d.year}</span>
            <div className="h-2 flex-1 rounded-full bg-black/5 overflow-hidden">
              <div className="h-full bg-[linear-gradient(90deg,#65cdc1,#127ead)]" style={{ width: `${(d.value / max) * 100}%` }} />
            </div>
            <span className="w-16 text-right text-xs font-medium">{nf0.format(d.value)}{unit ? ` ${unit}` : ''}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function LineMini({ points }: { points: number[] }) {
  const w = 360, h = 90, p = 6
  const max = Math.max(...points, 1)
  const step = (w - p * 2) / Math.max(points.length - 1, 1)
  const coords = points.map((v, i) => `${p + i * step},${h - p - (v / max) * (h - p * 2)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full h-24">
      <polyline fill="none" stroke="#65cdc1" strokeWidth="2" points={coords} />
      {points.map((v, i) => (
        <circle key={i} cx={p + i * step} cy={h - p - (v / max) * (h - p * 2)} r="2" fill="#127ead" />
      ))}
    </svg>
  )
}

function PieDonut({ data }: { data: { label: string; value: number; color: string }[] }) {
  const size = 140
  const r = 52
  const c = 2 * Math.PI * r
  const total = data.reduce((a, b) => a + b.value, 0) || 1
  let offset = 0
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="justify-self-center">
      <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
        <circle r={r} cx={0} cy={0} fill="none" stroke="#eef7f8" strokeWidth={16} />
        {data.map((d, i) => {
          const frac = d.value / total
          const dash = c * frac
          const gap = c - dash
          const el = (
            <circle key={i} r={r} cx={0} cy={0} fill="none" stroke={d.color} strokeWidth={16} strokeDasharray={`${dash} ${gap}`} strokeDashoffset={-offset} />
          )
          offset += dash
          return el
        })}
      </g>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-current" fill="#0f172a" fontSize="14" fontWeight="600">{total}%</text>
    </svg>
  )
}

function Gauge({ value }: { value: number }) {
  const w = 220, h = 120
  const r = 90
  const cx = w / 2, cy = h
  const start = Math.PI, end = 0
  const angle = start + (end - start) * (value / 100)
  const sx = cx + r * Math.cos(start), sy = cy + r * Math.sin(start)
  const ex = cx + r * Math.cos(end), ey = cy + r * Math.sin(end)
  const px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle)
  return (
    <div className="mt-2 grid place-items-center">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <path d={`M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`} fill="none" stroke="#e8f6f6" strokeWidth={16} />
        <path d={`M ${sx} ${sy} A ${r} ${r} 0 0 1 ${px} ${py}`} fill="none" stroke="#16a7a3" strokeWidth={16} />
        <circle cx={cx} cy={cy} r={6} fill="#127ead" />
      </svg>
      <div className="-mt-2 text-xl font-semibold">{value}%</div>
      <div className="text-xs text-ink/60">Sello verde</div>
    </div>
  )
}

function StackedMonthly({ monthLabels, stacks }: { monthLabels: string[]; stacks: { label: string; color: string; values: number[] }[] }) {
  const cols = monthLabels.length
  const totals = Array.from({ length: cols }, (_, i) => stacks.reduce((a, s) => a + (s.values[i] || 0), 0))
  const max = Math.max(...totals, 1)
  return (
    <div className="mt-3">
      <div className="grid grid-cols-7 gap-2 items-end h-32">
        {totals.map((t, i) => (
          <div key={i} className="flex flex-col justify-end h-full">
            <div className="w-full rounded-md overflow-hidden" style={{ height: `${(t / max) * 100}%` }}>
              {stacks.map((s, idx) => (
                <div key={idx} style={{ background: s.color, height: `${(s.values[i] || 0) / (t || 1) * 100}%` }} className="w-full" />
              ))}
            </div>
            <div className="mt-1 text-[10px] text-ink/60 text-center">{monthLabels[i]}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-ink/70">
        {stacks.map((s, i) => (
          <div key={i} className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{background:s.color}}/> {s.label}</div>
        ))}
      </div>
    </div>
  )
}
