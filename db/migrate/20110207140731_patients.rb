class Patients < ActiveRecord::Migration
  def self.up
    create_table :needs do |t|
      t.string :name, :null => false
    end
    create_table :patients do |t|
      t.string :name, :null => false
    end
    create_table :needs_patients, :id => false do |t|
     t.integer :patient_id, :null => false
     t.integer :need_id, :null => false
    end
  end

  def self.down
    drop_table :needs_patients
    drop_table :needs
    drop_table :patients
  end
end
