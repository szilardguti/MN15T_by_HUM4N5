import os
import csv

base_path_string = "MNIST_images/"
base_sql_string = """INSERT INTO 
	    MNIST_Image (`ID`, `RealValue`, `Vote_0`, `Vote_1`, `Vote_2`, `Vote_3`, `Vote_4`, `Vote_5`, `Vote_6`, `Vote_7`, `Vote_8`, `Vote_9`, `Deviation`, `ImagePath`)
    VALUES
    """

def parse_images_tosql(ending, startindex):
    indexVal = startindex
    curr_path = os.path.dirname(os.path.realpath(__file__))
    ending_path = [ dir for dir in os.listdir(curr_path) if ending in dir ]

    inner_path = base_path_string + ending_path[0] + '/'
    curr_path = os.path.join(curr_path, ending_path[0])

    insert_sql_string = []

    for real_value_label in range(10):
        value_path = inner_path + str(real_value_label) + '/'
        os_value_path = os.path.join(curr_path, str(real_value_label))

        for image in os.listdir(os_value_path):
            indexVal = indexVal + 1
            img_path = value_path + image
            sql_string_row = "\t( {2}, {0}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '{1}')".format(real_value_label, img_path, indexVal)

            insert_sql_string.append(sql_string_row)

        print("{0} done in {1} in SQL script creation".format(real_value_label, ending))

    
    return ',\n'.join(insert_sql_string), indexVal


def parse_images_tocsv(ending, startindex):
    indexVal = startindex
    curr_path = os.path.dirname(os.path.realpath(__file__))
    ending_path = [ dir for dir in os.listdir(curr_path) if ending in dir ]

    inner_path = base_path_string + ending_path[0] + '/'
    curr_path = os.path.join(curr_path, ending_path[0])

    insert_csv_matrix = []

    for real_value_label in range(10):
        value_path = inner_path + str(real_value_label) + '/'
        os_value_path = os.path.join(curr_path, str(real_value_label))

        for image in os.listdir(os_value_path):
            indexVal = indexVal + 1
            img_path = value_path + image
            csv_data_row = [indexVal, real_value_label, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "'" + img_path + "'"]

            insert_csv_matrix.append(csv_data_row)

        print("{0} done in {1} in CSV creation".format(real_value_label, ending))
    return insert_csv_matrix, indexVal


if __name__ == "__main__":
    indexVal = 0
    print("="*20 + "sql creation started" + "="*20)
    test_inserts, indexVal = parse_images_tosql("testing", indexVal)
    train_inserts, indexVal = parse_images_tosql("training", indexVal)

    final_sql_string = base_sql_string + test_inserts + '\n' + train_inserts + '\n;'
    kiiras = open('{0}\\sql_insert.txt'.format(os.path.dirname(os.path.realpath(__file__))), 'w')
    kiiras.write(final_sql_string)

    print("="*20 + "sql creation ended" + "="*20)
    indexVal = 0
    print("="*20 + "csv creation started" + "="*20)

    fullData = []

    with open(os.path.dirname(os.path.realpath(__file__)) +'\\MNIST_image_data.csv', 'w', encoding='UTF8', newline='') as csv_file:
        writer = csv.writer(csv_file)

        header = ['ID','RealValue', 'Vote_0', 'Vote_1', 'Vote_2', 'Vote_3', 'Vote_4', 'Vote_5', 'Vote_6', 'Vote_7', 'Vote_8', 'Vote_9', 'Deviation', 'ImagePath']
        #writer.writerow(header)

        data, indexVal = parse_images_tocsv("testing", indexVal)
        writer.writerows(data)
        for val in data:
            fullData.append(val)

        data, indexVal = parse_images_tocsv("training", indexVal)
        writer.writerows(data)
        for val in data:
            fullData.append(val)

    print("="*20 + "csv creation ended" + "="*20)

print(fullData[0])
for index in range(0,35):
    startIndex = index * 2000
    vals = []
    for temp_val in fullData[startIndex:startIndex+2000]:
        vals.append(temp_val)

    with open(os.path.dirname(os.path.realpath(__file__)) +'\\partial_csv\\MNIST_image_data_' + str(index+1) + '.csv', 'w', encoding='UTF8', newline='') as csv_file:
        writer = csv.writer(csv_file)

        writer.writerows(vals)
        print('csv num: ' + str(index+1) + ' done writing!')