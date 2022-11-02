export const API_EKYC_RECOGNITION = 'http://ekyc2.mobifone.ai/v2/recognition';
export const API_EKYC_VERIFICATION = 'http://ekyc2.mobifone.ai/v2/verification';

export const HEADER_EKYC = {
  'api-key': 'f70886c4-387f-451c-a95f-6c60df74a7e2',
  'Content-Type': 'application/json',
};

export const TYPE_PAPER = {
  CMND: 'Chứng minh nhân dân',
  // CCCD: 'Căn cước công dân',
  // HC: 'Hộ chiếu',
  KHUON_MAT: 'Ảnh khuôn mặt',
};

export const PAPER_VIEW = {
  MT: 'Mặt trước',
  MS: 'Mặt sau',
};
