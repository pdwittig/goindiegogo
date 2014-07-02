class AddMetrics < ActiveRecord::Migration
  def change
    create_table :metrics do |t|
      t.string :type
      t.integer :value
      t.integer :campaign_id

      t.timestamps
    end
  end
end
