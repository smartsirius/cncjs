const variables = [
  { type: 'header', text: 'Wait until the planner queue is empty' },
  '%wait\n',
  { type: 'header', text: 'User-defined global variables' },
  '%global.tool = Number(tool) || 0\n',
  { type: 'header', text: 'Display a global variable using an inline comment' },
  '(tool=[global.tool])\n',
  { type: 'header', text: 'Keep a backup of current work position' },
  '%X0=posx,Y0=posy,Z0=posz\n',
  { type: 'header', text: 'Go to previous work position' },
  'G0 X[X0] Y[Y0]\n',
  'G0 Z[Z0]\n',
  { type: 'header', text: 'Tool change' },
  '%prevTool = Number(global.tool) || 0, global.tool = tool\n',
  { type: 'header', text: 'Save modal state' },
  '%WCS=modal.wcs\n',
  '%PLANE=modal.plane\n',
  '%UNITS=modal.units\n',
  '%DISTANCE=modal.distance\n',
  '%FEEDRATE=modal.feedrate\n',
  '%SPINDLE=modal.spindle\n',
  '%COOLANT=modal.coolant\n',
  { type: 'header', text: 'Restore modal state' },
  '[WCS] [PLANE] [UNITS] [DISTANCE] [FEEDRATE] [SPINDLE] [COOLANT]\n',
  { type: 'header', text: 'Current work position' },
  '[posx]',
  '[posy]',
  '[posz]',
  '[posa]',
  { type: 'header', text: 'Set bounding box' },
  '%xmin=0,xmax=100,ymin=0,ymax=100,zmin=0,zmax=50\n',
  { type: 'header', text: 'Bounding box' },
  '[xmin]',
  '[xmax]',
  '[ymin]',
  '[ymax]',
  '[zmin]',
  '[zmax]'
];

export default variables;
