export interface Tech {
  key: string;
  name: string;
  description: string;
  area: string;
  base_factor: number;
  base_weight: number;
  category: string;
  cost: number;
  feature_unlocks: string[];
  is_dangerous: boolean;
  is_rare: boolean;
  is_start_tech: boolean;
  prerequisites: any[];
  tier: number;
  prerequisites_names: any[];
  weight_modifiers: any[];
  potential: any[];
  children: any[];
  is_event: boolean;
  source: string;
  dlc: string;

  is_gestalt: boolean;
  is_machine_empire: boolean;
  is_drive_assimilator: boolean;
  is_rogue_servitor: boolean;
  is_hive_empire: boolean;
  is_megacorp: boolean;
}
