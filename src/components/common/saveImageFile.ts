const EXT_BY_MIME: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png'
};

async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
  const res = await fetch(dataUrl);
  return res.blob();
}

function downloadViaAnchor(dataUrl: string, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}

/**
 * 이미지(데이터 URL)를 파일로 저장한다. PC의 Chrome/Edge처럼 File System Access API를
 * 지원하는 브라우저에서는 네이티브 "다른 이름으로 저장" 대화상자를 띄워 저장 폴더를 직접
 * 고를 수 있게 하고, 지원하지 않는 브라우저(Firefox·Safari·모바일 등)에서는 기존처럼
 * 기본 다운로드 폴더에 바로 저장한다.
 */
export async function saveImageFile(
  dataUrl: string,
  filename: string,
  mimeType: 'image/jpeg' | 'image/png' = 'image/jpeg'
): Promise<void> {
  const showSaveFilePicker = (window as unknown as {
    showSaveFilePicker?: (options: unknown) => Promise<{
      createWritable: () => Promise<{ write: (data: Blob) => Promise<void>; close: () => Promise<void> }>;
    }>;
  }).showSaveFilePicker;

  if (typeof showSaveFilePicker === 'function') {
    try {
      const ext = EXT_BY_MIME[mimeType] ?? '.jpg';
      const handle = await showSaveFilePicker({
        suggestedName: filename,
        types: [{ description: 'Image', accept: { [mimeType]: [ext] } }]
      });
      const blob = await dataUrlToBlob(dataUrl);
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (err) {
      // 사용자가 저장 대화상자를 취소한 경우 아무 것도 하지 않는다(다운로드로 대체하지 않음).
      if ((err as { name?: string })?.name === 'AbortError') return;
      // 그 외 예상치 못한 오류는 기존 다운로드 방식으로 대체한다.
    }
  }

  downloadViaAnchor(dataUrl, filename);
}
