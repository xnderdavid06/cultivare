'use client';

const configs = {
  ciri: {
    badgeGrad: ['#72d84f', '#2e8c14'],
    badgeBorder: '#217010',
    badgeShadow: '0 3px 0 #175a0c',
    stripGrad: ['#5fae2f', '#2e8c14'],
    rowFrom: '#f0fce8', rowTo: '#fafff5',
    rowHoverFrom: '#e3f9d9', rowHoverTo: '#f5ffe8',
    rowBorder: '#c3e8a0',
    rowShadow: '0 3px 0 rgba(95,174,47,0.18)',
    rowHoverShadow: '0 5px 0 rgba(95,174,47,0.28)',
  },
  manfaat: {
    badgeGrad: ['#ffd84a', '#e09000'],
    badgeBorder: '#b87200',
    badgeShadow: '0 3px 0 #8a5500',
    stripGrad: ['#f6b830', '#c48512'],
    rowFrom: '#fffbe8', rowTo: '#fffdf5',
    rowHoverFrom: '#fff5d0', rowHoverTo: '#fffce8',
    rowBorder: '#f0d885',
    rowShadow: '0 3px 0 rgba(246,184,48,0.2)',
    rowHoverShadow: '0 5px 0 rgba(246,184,48,0.32)',
  },
  khasiat: {
    badgeGrad: ['#d4906a', '#8a4420'],
    badgeBorder: '#6a3418',
    badgeShadow: '0 3px 0 #4a2510',
    stripGrad: ['#b57b45', '#7a4a22'],
    rowFrom: '#fdf4ec', rowTo: '#fffdf8',
    rowHoverFrom: '#faeddf', rowHoverTo: '#fff9f2',
    rowBorder: '#e8c8a0',
    rowShadow: '0 3px 0 rgba(181,123,69,0.18)',
    rowHoverShadow: '0 5px 0 rgba(181,123,69,0.28)',
  },
  olahan: {
    badgeGrad: ['#48d490', '#167a48'],
    badgeBorder: '#105e38',
    badgeShadow: '0 3px 0 #0a4428',
    stripGrad: ['#3f9e68', '#1c693a'],
    rowFrom: '#e8f7ee', rowTo: '#f5fffb',
    rowHoverFrom: '#d8f4e5', rowHoverTo: '#ebfff4',
    rowBorder: '#a8dfbe',
    rowShadow: '0 3px 0 rgba(63,158,104,0.18)',
    rowHoverShadow: '0 5px 0 rgba(63,158,104,0.28)',
  },
};

function BulletRow({ item, index, c }) {
  const handleEnter = (e) => {
    e.currentTarget.style.background = `linear-gradient(to right, ${c.rowHoverFrom}, ${c.rowHoverTo})`;
    e.currentTarget.style.boxShadow = c.rowHoverShadow;
    e.currentTarget.style.transform = 'scale(1.013)';
  };
  const handleLeave = (e) => {
    e.currentTarget.style.background = `linear-gradient(to right, ${c.rowFrom}, ${c.rowTo})`;
    e.currentTarget.style.boxShadow = c.rowShadow;
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div
      className="flex items-stretch rounded-2xl border-2 overflow-hidden cursor-default"
      style={{
        background: `linear-gradient(to right, ${c.rowFrom}, ${c.rowTo})`,
        borderColor: c.rowBorder,
        boxShadow: c.rowShadow,
        transition: 'transform 200ms ease, box-shadow 200ms ease, background 200ms ease',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Strip warna vertikal kiri */}
      <div
        className="w-1.5 shrink-0"
        style={{ background: `linear-gradient(to bottom, ${c.stripGrad[0]}, ${c.stripGrad[1]})` }}
      />

      {/* Nomor stiker miring kayak label kebun */}
      <div className="flex items-center px-3 py-3 sm:py-3.5 shrink-0">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 select-none border-2"
          style={{
            background: `linear-gradient(135deg, ${c.badgeGrad[0]}, ${c.badgeGrad[1]})`,
            borderColor: c.badgeBorder,
            boxShadow: c.badgeShadow,
            transform: 'rotate(-5deg)',
          }}
        >
          <span
            className="text-white font-black text-sm sm:text-base font-display leading-none"
            style={{ transform: 'rotate(5deg)', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            {index + 1}
          </span>
        </div>
      </div>

      {/* Teks konten */}
      <div className="flex items-center py-3 sm:py-3.5 pr-4">
        <p className="text-sm sm:text-base leading-relaxed font-bold text-bark">
          {item}
        </p>
      </div>
    </div>
  );
}

export default function ThemedBulletList({ items, category = 'ciri' }) {
  const c = configs[category] || configs.ciri;
  return (
    <div className="space-y-2.5 mt-1">
      {items.map((item, i) => (
        <BulletRow key={i} item={item} index={i} c={c} />
      ))}
    </div>
  );
}
