class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.boolean :s1_wins
      t.boolean :s2_wins
      t.integer :average_score
      t.timestamps
    end
  end
end
